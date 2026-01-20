import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const Rethink = Inter({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Ruan Vieira | Desenvolvedor Fullstack",
    template: "%s | Ruan Vieira",
  },
  description:
    "Ruan Vieira é desenvolvedor Fullstack Júnior, especializado em aplicações web modernas, integrações de sistemas, automação de processos e soluções eficientes com React, Next.js e Node.js.",
  keywords: [
    // Nome
    "Ruan Vieira",
    "Ruan Vieira desenvolvedor",
    "Ruan Vieira fullstack",

    // Cargo
    "Desenvolvedor Fullstack",
    "Desenvolvedor Fullstack Júnior",
    "Desenvolvedor Web",
    "Programador Fullstack",
    "Programador Web",

    // Tecnologias
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "API REST",
    "Integração de sistemas",
    "Automação de processos",

    // Mercado BR
    "Desenvolvedor Fullstack Brasil",
    "Desenvolvedor Web Brasil",
    "Programador Júnior",
    "Portfólio Desenvolvedor",

    // EN
    "Fullstack Developer",
    "Junior Fullstack Developer",
    "Web Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Developer Portfolio",
  ],
  authors: [{ name: "Ruan Vieira" }],
  creator: "Ruan Vieira",
  metadataBase: new URL("https://ruanvieira.com.br"),
  openGraph: {
    title: "Ruan Vieira | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack Júnior criando aplicações web modernas, integrações de sistemas e soluções escaláveis.",
    url: "https://ruanvieira.com.br",
    siteName: "Ruan Vieira - Portfólio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ruan Vieira - Desenvolvedor Fullstack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Vieira | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack Júnior focado em aplicações web, automação e integrações.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/assets/favicons/favicon.ico",
    shortcut: "/assets/favicons/favicon.ico",
    apple: [
      "/assets/favicons/icon-192x192.png",
      "/assets/favicons/icon-512x512.png",
    ],
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const lang = (await cookies()).get("NEXT_LOCALE")?.value;

  const validLocales: string[] = ["pt", "en", "es"];

  const selectedLocale: string = validLocales.includes(lang || "")
    ? (lang as string)
    : validLocales.includes(locale || "")
      ? (locale as string)
      : "pt";

  const messages = await getMessages({ locale: selectedLocale });
  return (
    <html lang={selectedLocale} className="scroll-smooth">
      <body className={Rethink.className}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
