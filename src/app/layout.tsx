import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Chargement des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Métadonnées de la page
export const metadata: Metadata = {
  metadataBase: new URL("https://laurentarcos.fr"), 
  title: "Laurent Arcos - Développeur Web - CV interactif",
  description: "CV interactif de Laurent Arcos, spécialisé en développement web et applications modernes.",
  keywords: [
    "Laurent Arcos",
    "Développeur Web",
    "curriculum vitae",
    "cv",
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Frontend",
    "Backend",
    "Développeur Frontend",
    "Développeur Backend",
    "Développeur Full Stack",
    "Portfolio",
    "CV interactif",
    "CV en ligne",
    "CV numérique",
    "n8n",
    "automatisation",
    "Airtable",
    "API",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "NextJS",
    "Docker",
    "GitHub Actions",
    "Raspberry Pi",
    "Développeur Web Full Stack",
    "Développeur Web Hyères",
    "Développeur Web Var",
    "Développeur Web Toulon",
    "Développeur Web Provence-Alpes-Côte d'Azur",
    "Développeur Web France",
    "Développeur Web Marseille",
    "Développeur Web Nice",
    "Développeur Web Aix-en-Provence",
    "Développeur Web PACA",
  ],
  authors: [{ name: "Laurent Arcos", url: "https://cv.laurentarcos.fr" }],
  openGraph: {
    title: "Laurent Arcos - Développeur Web - CV interactif",
    description: "Découvrez le CV interactif de Laurent Arcos,  spécialisé en développement web et applications modernes.",
    url: "https://cv.laurentarcos.fr",
    siteName: "Laurent Arcos CV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laurent Arcos - Développeur Web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Ajout de la favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a202c" />
        <link rel="canonical" href="https://laurentarcos.fr" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="CV interactif de Laurent Arcos, spécialisé en développement web et applications modernes en React, Typescript et en automatisations n8n" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Laurent Arcos",
              url: "https://laurentarcos.fr",
              jobTitle: "Développeur Web",
              sameAs: [
                "https://www.linkedin.com/in/laurentarcos/",
                "https://github.com/LaurentArcos",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
