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
  title: "Psicóloga Talita Faraco Cantelli | Psico-oncologista",
  description: "Atendimento psicológico humanizado, respeitando a singularidade de cada pessoa em sua jornada.",
  keywords: ["psicóloga", "psico-oncologia", "apoio psicológico", "pacientes com câncer", "terapia", "acompanhamento psicológico", "psicologa hospitalar", "psicóloga câncer"],
  openGraph: {
    title: "Psicóloga Talita Faraco Cantelli | Psico-oncologista",
    description: "Psicóloga clínica, especializada em psico-oncologia, com foco no apoio psicológico a pacientes com câncer.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa de psicóloga psico-oncologista",
      },
    ],
    url: "https://www.psitalitafc.com.br",
    siteName: "Psicóloga Psico-Oncologista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Talita Faraco Cantelli | Psico-oncologista",
    description: "Apoio psicológico especializado para pacientes com câncer. Agende sua consulta.",
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
