import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
const Rethink = Rethink_Sans({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Ruan Vieira",
  description: "Desenvolvedor Full Stack Junior - Ruan Vieira",
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
  const messages = await getMessages();
  const lang = (await cookies()).get("NEXT_LOCALE")?.value;

  const validLocales: string[] = ["pt", "en", "es"];

  const selectedLocale: string = validLocales.includes(lang || "")
    ? (lang as string)
    : validLocales.includes(locale || "")
    ? (locale as string)
    : "pt";

  return (
    <html lang={selectedLocale} className="scroll-smooth">
      <body className={Rethink.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
