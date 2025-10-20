"use client";

import Image from "next/image";
import { useState, useMemo, JSX } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Flag from "react-world-flags";
import { Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface FlagType {
  alt: string;
  lang: string;
  icon: JSX.Element;
}

const Header = () => {
  const router = useRouter();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        alt: "Brazil",
        lang: "pt",
        icon: (
          <Flag code="BR" style={{ width: 24, height: 24, borderRadius: 4 }} />
        ),
      },
      {
        alt: "Spanish",
        lang: "es",
        icon: (
          <Flag code="ES" style={{ width: 24, height: 24, borderRadius: 4 }} />
        ),
      },
    ],
    []
  );

  const toggleLangDropdown = () => setIsLangOpen(!isLangOpen);

  const handleSelectFlag = (flag: FlagType) => {
    Cookies.set("NEXT_LOCALE", flag.lang);
    setIsLangOpen(false);

    router.refresh();
  };

  return (
    <header className="z-30 fixed top-0 left-0 backdrop-blur-sm w-full flex flex-col items-center sm:flex-row lg:flex-row justify-between px-4  sm:px-8 lg:px-40 mb-40 border-b-2 border-b-cyan-100">
      {/* Contêiner da Logo */}
      <div className="bg-none flex items-center gap-4 justify-center w-full rounded-md sm:w-auto mb-4 sm:mb-0">
        <Image
          src="/assets/ruan.jpg"
          className="rounded-3xl p-2 shadow-md "
          style={{
            objectFit: "cover",
            width: 100,
            height: 100,
          }}
          width={300}
          height={300}
          alt="Logo"
        />
        <h1 className="font-bold text-light-text dark:text-dark-text text-2xl">
          Ruan Vieira
        </h1>
      </div>

      {/* Contêiner da Bandeira */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Switch de tema */}
        <button
          onClick={toggleTheme}
          className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-300
    ${
      theme === "dark"
        ? "bg-gray-800 border border-gray-700"
        : "bg-yellow-400 border border-yellow-300"
    }`}
          style={{ padding: "2px" }} // corrige o deslocamento da bolinha
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300
      ${
        theme === "dark"
          ? "translate-x-8 bg-gray-200  text-yellow-400"
          : "translate-x-0 bg-white text-yellow-500"
      }`}
          >
            {theme === "dark" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </div>
        </button>

        <div className="relative">
          <button
            onClick={toggleLangDropdown}
            aria-label={"Languages"}
            className="flex items-center gap-1 rounded-md px-2 py-1bg-gray-100   transition-colors"
          >
            <Languages className="text-light-text dark:text-dark-text" />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md border border-gray-400 dark:border-gray-600 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text shadow-lg z-50">
              {Flags.map((flag) => (
                <button
                  key={flag.lang}
                  onClick={() => handleSelectFlag(flag)}
                  className="flex items-center gap-2 px-3 py-2 w-full text-left rounded-md 
              text-foreground  
                   hover:dark:bg-green-400
                   transition-colors"
                >
                  {flag.icon}
                  <span>{flag.alt}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
