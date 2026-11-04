import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Hanken_Grotesk, Martian_Mono } from "next/font/google";
import { Shell } from "@/components/cv/Shell";
import "./globals.css";

// Chargement des polices
const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Martian_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Métadonnées de la page
const SITE = "https://cv-interactif-nu.vercel.app";
const TITLE = "Laurent Arcos - Développeur full stack & e-commerce";
const DESCRIPTION =
  "CV de Laurent Arcos, développeur full stack et e-commerce à Toulon : Next.js, TypeScript, Shopify, n8n, Klaviyo et outils logistiques.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Laurent Arcos",
    "Développeur Full Stack",
    "Développeur e-commerce",
    "Développeur Toulon",
    "Développeur Var",
    "Shopify",
    "n8n",
    "Klaviyo",
    "Airtable",
    "Next.js",
    "React",
    "TypeScript",
    "WMS",
    "CV",
  ],
  authors: [{ name: "Laurent Arcos", url: SITE }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Laurent Arcos",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable}`}>
      <head>
        <meta name="theme-color" content="#11161d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Laurent Arcos",
              url: SITE,
              jobTitle: "Développeur full stack & e-commerce",
              sameAs: ["https://www.linkedin.com/in/laurentarcos/", "https://github.com/LaurentArcos"],
            }),
          }}
        />
      </head>
      <body>
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}
