import { checkBotId } from "botid/server";
import { NextRequest, NextResponse } from "next/server";

const EMAIL = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;
const MAX_BODY = 6000;
const MAX_LINKS = 2;
const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

// Limite par adresse IP. Elle vit en mémoire : chaque instance a la sienne,
// BotID et les autres contrôles restent donc la protection principale.
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

/** Retire les sauts de ligne et caractères de contrôle d'un champ sur une ligne. */
const oneLine = (s: string) => s.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
/** Garde les sauts de ligne du message, retire les autres caractères de contrôle. */
const multiLine = (s: string) => s.replace(/[\u0000-\u0009\u000b-\u001f\u007f]+/g, " ").trim();

const fail = (status: number) => NextResponse.json({ ok: false }, { status });
// Réponse positive volontaire : un robot n'apprend pas qu'il a été filtré.
const silent = () => NextResponse.json({ ok: true });

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host) return fail(403);
  if (!req.headers.get("content-type")?.startsWith("application/json")) return fail(415);

  const raw = await req.text();
  if (raw.length > MAX_BODY) return fail(413);

  if (process.env.VERCEL) {
    const verification = await checkBotId();
    if (verification.isBot) return fail(403);
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400);
  }

  if (typeof body.website === "string" && body.website !== "") return silent();
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return silent();

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnue";
  if (limited(ip)) return fail(429);

  const name = oneLine(String(body.name ?? ""));
  const email = oneLine(String(body.email ?? ""));
  const message = multiLine(String(body.message ?? ""));
  if (name.length < 2 || name.length > 80) return fail(400);
  if (email.length > 120 || !EMAIL.test(email)) return fail(400);
  if (message.length < 10 || message.length > 2000) return fail(400);
  const links = message.match(/https?:\/\/|www\./gi)?.length ?? 0;
  if (links > MAX_LINKS) return silent();

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) return fail(503);

  // Texte brut uniquement, sans pièce jointe : le contenu du visiteur ne peut
  // transporter ni fichier ni HTML. L'adresse du destinataire reste côté serveur.
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "CV Laurent Arcos <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Message du CV : ${name}`.slice(0, 120),
      text: `De : ${name} <${email}>\n\n${message}`,
    }),
  });
  if (!res.ok) return fail(502);
  return NextResponse.json({ ok: true });
}
