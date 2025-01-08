import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requêtes
  duration: 60, // par minute
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { firstName, lastName, email, phone, company, subject, message, recaptchaToken } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Les champs email et message sont obligatoires" });
  }

  try {
    // Vérification de reCAPTCHA
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({ message: "Échec de la vérification reCAPTCHA" });
    }

    await rateLimiter.consume(req.socket.remoteAddress || "");

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: `"Laurent Arcos" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: subject || "Nouveau message de contact",
      html: `
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return res.status(429).json({ message: "Trop de requêtes. Veuillez réessayer plus tard." });
    }

    return res.status(500).json({ message: "Erreur lors de l'envoi du message" });
  }
}
