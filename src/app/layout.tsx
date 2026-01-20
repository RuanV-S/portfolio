import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const Rethink = Inter({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ruan Vieira",
  description: "Ruan Vieira - Desenvolvedor Full Stack",
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
