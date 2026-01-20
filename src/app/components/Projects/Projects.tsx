"use client";

import { useTranslations } from "next-intl";
import ReusableDiv from "../ReusableDiv";
import ProjectCard from "./ProjectCard";

interface Project {
  logoSrc: string;
  logoAlt: string;
  name: string;
  description: string;
  links: links[];
  techStack: string[];
}

interface links {
  icon: string;
  href: string;
  alt: string;
}

const projects: Project[] = [
  {
    logoSrc: "/assets/company/techmoney.png",
    logoAlt: "TechMoney",
    name: "techmoney",
    links: [
      {
        icon: "/assets/icons/www-icon.svg",
        href: "https://techmoney.online/",
        alt: "WebSite",
      },
    ],
    description: "techmoney",
    techStack: ["Next", "Typescript", "Tailwind", "AWS", "Prisma", "MongoDB"],
  },
  {
    logoSrc: "/assets/company/chamagarcom.png",
    logoAlt: "Chama Garçom",
    name: "chamagarcom",
    links: [
      {
        icon: "/assets/icons/www-icon.svg",
        href: "https://chamagarcom.net/",
        alt: "WebSite",
      },
    ],
    description: "chamagarcom",
    techStack: [
      "Next",
      "Typescript",
      "Tailwind",
      "EXPO",
      "React Native",
      "AWS",
      "Mercado Pago SDK",
      "Prisma",
      "MongoDB",
      "Styled Components",
    ],
  },
  {
    logoSrc: "/assets/company/simplify.png",
    logoAlt: "Portifolio",
    name: "portifolio",
    links: [
      {
        icon: "/assets/icons/GitHub.svg",
        href: "https://github.com/RuanV-S/portfolio",
        alt: "Github",
      },
    ],
    description: "portifolio",
    techStack: ["Next", "Typescript", "Tailwind"],
  },
  {
    logoSrc: "/assets/company/tlgmedia.png",
    logoAlt: "Tlg Media Logo",
    name: "tlgmedia",
    links: [
      {
        icon: "/assets/icons/www-icon.svg",
        href: "https://tlgmedia.com.br/",
        alt: "Website",
      },
    ],
    description: "tlgmedia",
    techStack: ["Javascript", "Express", "HTML5", "CSS3", "Amazon S3"],
  },
  {
    logoSrc: "/assets/company/simplify.png",
    logoAlt: "Simplify Logo",
    name: "simplify",
    links: [
      {
        icon: "/assets/icons/www-icon.svg",
        href: "https://simplifycode.com.br/",
        alt: "Website",
      },
    ],
    description: "simplify",
    techStack: ["Next", "Typescript", "Tailwind", "Amazon S3"],
  },
  {
    logoSrc: "/assets/company/shopper.png",
    logoAlt: "Shopper",
    name: "shopper",
    links: [
      {
        icon: "/assets/icons/GitHub.svg",
        href: "https://github.com/RuanV-S/Teste_FullStack_Shopper",
        alt: "Github",
      },
    ],
    description: "shopper",
    techStack: [
      "Next",
      "Typescript",
      "Google Maps API",
      "EXPRESS",
      "DOCKER",
      "POSTGRESQL",
      "PRISMA",
      "TAILWIND",
      "Amazon S3",
      "JEST",
    ],
  },
];

const Projects = () => {
  const t = useTranslations("homePage.projects");
  return (
    <ReusableDiv>
      <p className="text-cyan-100 p-10">
        <span className="text-black dark:text-white tracking-widest">02</span>.
        {t("title")}
      </p>

      <div className="grid grid-cols-1 -mt-10">
        {projects.map((project, index) => {
          const nameTranslation = t(`items.${project.name}.name`);
          const descriptionTranslation = t(
            `items.${project.description}.description`,
          );

          return (
            <ProjectCard
              key={index}
              logoSrc={project.logoSrc}
              logoAlt={project.logoAlt}
              name={nameTranslation}
              links={project.links}
              description={descriptionTranslation}
              techStack={project.techStack}
            />
          );
        })}
      </div>
    </ReusableDiv>
  );
};

export default Projects;
