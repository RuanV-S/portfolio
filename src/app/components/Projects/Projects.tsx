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
        href: "https://simplfiycode.com.br/",
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
      <p>
        <span className="text-black dark:text-white text-4xl tracking-widest">
          03
        </span>
        .{t("title")}
      </p>

      <div className="grid grid-cols-1">
        {projects.map((project, index) => {
          const nameTranslation = t(`items.${project.name}.name`);
          const descriptionTranslation = t(
            `items.${project.description}.description`
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
