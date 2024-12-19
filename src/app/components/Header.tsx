"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Flag {
  src: string;
  alt: string;
  lang: string;
}

const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const Flags: Flag[] = useMemo(
    () => [
      { src: "./assets/flags/eua_flag.svg", alt: "USA", lang: "en" },
      { src: "./assets/flags/brazil_flag.svg", alt: "Brasil", lang: "pt" },
      { src: "./assets/flags/spain_flag.svg", alt: "Espanha", lang: "es" },
    ],
    []
  );

  const [selectedFlag, setSelectedFlag] = useState<Flag | null>(null);
  const [availableFlags, setAvailableFlags] = useState<Flag[]>([]);

  useEffect(() => {
    const language = Cookies.get("NEXT_LOCALE") || "en";
    const matchingFlag = Flags.find((flag) => flag.lang === language);

    if (matchingFlag) {
      setSelectedFlag(matchingFlag);
    }

    setAvailableFlags(Flags.filter((flag) => flag.lang !== language));
    setIsLoading(false);
  }, [Flags]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectFlag = (flag: Flag) => {
    setAvailableFlags((prevFlags) => [
      selectedFlag!,
      ...prevFlags.filter((f) => f.src !== flag.src),
    ]);
    Cookies.set("NEXT_LOCALE", flag.lang);
    setSelectedFlag(flag);
    setIsOpen(false);
    router.push(`/${flag.lang}`);
  };

  const Skeleton = () => (
    <div className="animate-pulse bg-cinza w-12 h-10 rounded-md"></div>
  );

  return (
    <header className="z-30 fixed top-0 left-0 backdrop-blur-sm w-full flex flex-col sm:flex-row lg:flex-row justify-between px-40 lg:pt-10 mb-40 border-b-2 border-b-cyan-100">
      <Image
        src="/assets/logo.png"
        width={100}
        height={100}
        alt="Logo"
        className="object-contain fill-slate-300 flex items-center justify-center"
      />

      <div className="relative w-[50px] flex m-7 p-1 bg-cinza rounded-md">
        <button onClick={toggleDropdown}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Image
              src={selectedFlag?.src || ""}
              className="rounded-md"
              alt="Selected flag"
              width={50}
              height={50}
              style={{
                objectFit: "contain",
              }}
              loading="lazy"
            />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-16 p-1 bg-cinza left-0 rounded-md ">
            {availableFlags.map((flag, index) => (
              <button key={index} onClick={() => handleSelectFlag(flag)}>
                <Image
                  src={flag.src}
                  className="rounded-md"
                  alt={flag.alt}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
