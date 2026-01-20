"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, JSX } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Flag from "react-world-flags";
import {
  Languages,
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";

interface FlagType {
  alt: string;
  lang: string;
  icon: JSX.Element;
}

export default function Sidebar() {
  const router = useRouter();
  const t = useTranslations("homePage");
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const Flags: FlagType[] = useMemo(
    () => [
      {
        alt: "English",
        lang: "en",
        icon: (
          <Flag code="US" style={{ width: 24, height: 24, borderRadius: 4 }} />
        ),
      },
      {
        alt: "Português",
        lang: "pt",
        icon: (
          <Flag code="BR" style={{ width: 24, height: 24, borderRadius: 4 }} />
        ),
      },
      {
        alt: "Español",
        lang: "es",
        icon: (
          <Flag code="ES" style={{ width: 24, height: 24, borderRadius: 4 }} />
        ),
      },
    ],
    [],
  );

  const toggleLangDropdown = () => setIsLangOpen(!isLangOpen);

  const handleSelectFlag = (flag: FlagType) => {
    Cookies.set("NEXT_LOCALE", flag.lang);
    setIsLangOpen(false);
    router.refresh();
  };

  return (
    <aside className="lg:col-span-4 lg:sticky lg:top-20 mb-10 lg:mb-0 w-full">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
        {/* FOTO */}
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl">
          <Image
            src="/assets/ruan.jpg"
            alt="Ruan Vieira"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* NOME E CARGO */}
        <div className="space-y- md:space-y-5">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Ruan Vieira
            <br className="hidden md:block" />
            <span className="font-light text-3xl text-zinc-500 dark:text-zinc-400">
              software developer
            </span>
          </h1>

          {/* DESCRIÇÃO CURTA */}
          <div className="space-y-2 text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-sm leading-relaxed mx-auto lg:mx-0">
            <p>
              {t("aboutMe.description") ||
                "Hi, I'm Ruan — building digital products and helping teams deliver value through code."}
            </p>
            <p className="text-zinc-400 font-medium text-xs md:text-sm uppercase tracking-wider">
              Web & Fullstack Projects
            </p>
          </div>
        </div>

        {/* REDES SOCIAIS */}
        <div className="flex gap-4">
          <Link
            href="mailto:poweruan14@gmail.com"
            className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://github.com/RuanV-S"
            target="_blank"
            className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ruanv-s/"
            target="_blank"
            className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://wa.me/5511968743086?text=Ol%C3%A1%2C%20Ruan!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20ou%20oportunidade."
            target="_blank"
            className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} />
          </Link>
          <div className="relative">
            <button
              onClick={toggleLangDropdown}
              className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:scale-105 transition-transform"
            >
              <Languages size={20} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-foreground shadow-lg z-50">
                {Flags.map((flag) => (
                  <button
                    key={flag.lang}
                    onClick={() => handleSelectFlag(flag)}
                    className="flex items-center gap-2 px-3 py-2 w-full text-left rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                  >
                    {flag.icon}
                    <span>{flag.alt}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SWITCH DE TEMA + IDIOMA */}
        <div className="flex justify-center gap-4 mt-2">
          {/* Tema */}
          <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-300
            ${theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-yellow-400 border border-yellow-300"}`}
            style={{ padding: "2px" }}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300
              ${theme === "dark" ? "translate-x-8 bg-gray-200 text-yellow-400" : "translate-x-0 bg-white text-yellow-500"}`}
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </div>
          </button>

          {/* Idioma */}
        </div>
      </div>
    </aside>
  );
}
