import type { Metadata } from "next";
import { Poiret_One, Montserrat } from "next/font/google";
import "./globals.css";

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Psicóloga Talita Faraco Cantelli",
  description: "Psicóloga Clínica e Hospitalar, especialista em Oncologia. Atendimentos online, palestras e consultoria.",
  keywords: ["psicóloga", "psicóloga clínica", "psico-oncologia", "apoio psicológico", "pacientes com câncer", "terapia", "acompanhamento psicológico", "psicologa hospitalar", "psicóloga câncer"],
  openGraph: {
    title: "Psicóloga Talita Faraco Cantelli",
    description: "Psicóloga Clínica e Hospitalar, especialista em Oncologia. Atendimentos online, palestras e consultoria.",
    images: [
      {
        url: "/images/card.svg",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa de psicóloga clínica e hospitalar",
      },
    ],
    url: "https://www.psitalitafc.com.br",
    siteName: "Psicóloga Psico-Oncologista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Talita Faraco Cantelli",
    description: "Psicóloga Clínica e Hospitalar, especialista em Oncologia. Atendimentos online, palestras e consultoria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={`${poiretOne.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
