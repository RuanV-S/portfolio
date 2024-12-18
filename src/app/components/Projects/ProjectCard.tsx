import Image from "next/image";
import Link from "next/link";

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

const ProjectCard = ({
  logoSrc,
  logoAlt,
  name,
  links,
  description,
  techStack,
}: Project) => {
  return (
    <div className="flex w-full ml-5 max-w-full mt-10">
      <Image
        src={logoSrc}
        className="rounded-md"
        alt={logoAlt}
        width={120}
        height={120}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          width: "120px",
          height: "120px",
        }}
      />
      <div className="ml-5">
        <span className="flex gap-2 text-white">
          {name}{" "}
          {links.map((link, index) => (
            <Link key={index} href={link.href} target="_blank">
              <div className="bg-cinza flex hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out p-1 gap-4 rounded-md">
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={25}
                  height={25}
                  className="rounded-md"
                />
              </div>
            </Link>
          ))}
        </span>

        <p className="text-sm text-slate-500 mt-1">{description}</p>
        <div className="text-sm flex text-white space-x-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="border-2 mt-2 border-cinza text-gray-400 p-1 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
