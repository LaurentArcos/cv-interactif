import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Chargement des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées de la page
export const metadata: Metadata = {
  metadataBase: new URL("https://laurentarcos.fr"), 
  title: "Laurent Arcos - Développeur Web",
  description: "Portfolio interactif de Laurent Arcos, spécialisé en développement web et applications modernes.",
  keywords: [
    "Laurent Arcos",
    "Développeur Web",
    "React",
    "Next.js",
    "Frontend",
    "Portfolio",
  ],
  authors: [{ name: "Laurent Arcos", url: "https://laurentarcos.fr" }],
  openGraph: {
    title: "Laurent Arcos - Développeur Web",
    description: "Découvrez le portfolio interactif de Laurent Arcos, spécialisé en React",
    url: "https://laurentarcos.fr",
    siteName: "Laurent Arcos Portfolio",
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
    icon: "/cv/favicon.ico",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
