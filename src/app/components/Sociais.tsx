"use client";

import Image from "next/image";
import Link from "next/link";

const sociais = [
  {
    name: "Github",
    icon: "./assets/icons/GitHub.svg",
    link: "https://github.com/RuanV-S",
  },
  {
    name: "Discord",
    icon: "./assets/icons/discord.svg",
    link: "https://discord.com/users/360227239226507265",
  },
  {
    name: "Twitter",
    icon: "./assets/icons/Twitter.svg",
    link: "https://x.com/Entoa777",
  },
  {
    name: "Linkedin",
    icon: "./assets/icons/LinkedIn.svg",
    link: "https://www.linkedin.com/in/ruanv-s/",
  },
  {
    name: "Hotmail",
    icon: "./assets/icons/gmail.svg",
    link: "mailto:ruan_vieiradasilva@hotmail.com",
  },
];

const SociaisIcons = () => {
  return (
    <div className="flex gap-5 mt-5">
      {sociais.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          <div className="bg-cinza hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out p-2 rounded-md">
            <Image
              src={social.icon}
              alt={social.name}
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SociaisIcons;
