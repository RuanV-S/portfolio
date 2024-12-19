export interface Skill {
  category: "Back-End" | "Front-End" | "Test" | "Database" | "DevOps";
  name: string;
  icon: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

const backEndSkills: Skill[] = [
  {
    category: "Back-End",
    name: "Node.js",
    icon: "/assets/icons/Node.js.svg",
    level: "Avançado",
  },
  {
    category: "Back-End",
    name: "Express.js",
    icon: "/assets/icons/Express.svg",
    level: "Avançado",
  },
  {
    category: "Back-End",
    name: "Python",
    icon: "/assets/icons/Python.svg",
    level: "Intermediário",
  },
  {
    category: "Back-End",
    name: "Lua",
    icon: "/assets/icons/Lua.svg",
    level: "Básico",
  },
];

const frontEndSkills: Skill[] = [
  {
    category: "Front-End",
    name: "Javascript",
    icon: "/assets/icons/JavaScript.png",
    level: "Avançado",
  },
  {
    category: "Front-End",
    name: "Typescript",
    icon: "/assets/icons/TypeScript.svg",
    level: "Avançado",
  },
  {
    category: "Front-End",
    name: "React",
    icon: "/assets/icons/React.svg",
    level: "Intermediário",
  },
  {
    category: "Front-End",
    name: "Next",
    icon: "/assets/icons/Next.js.svg",
    level: "Intermediário",
  },
  {
    category: "Front-End",
    name: "Tailwind",
    icon: "/assets/icons/Tailwind.svg",
    level: "Avançado",
  },
];

const databaseSkills: Skill[] = [
  {
    category: "Database",
    name: "PostgreSQL",
    icon: "/assets/icons/PostgresSQL.svg",
    level: "Intermediário",
  },
  {
    category: "Database",
    name: "MongoDB",
    icon: "/assets/icons/MongoDB.svg",
    level: "Intermediário",
  },
  {
    category: "Database",
    name: "MySQL",
    icon: "/assets/icons/MySQL.svg",
    level: "Intermediário",
  },
];

const devOpsSkills: Skill[] = [
  {
    category: "DevOps",
    name: "Docker",
    icon: "/assets/icons/Docker.svg",
    level: "Intermediário",
  },
  {
    category: "DevOps",
    name: "Git",
    icon: "/assets/icons/Git.svg",
    level: "Avançado",
  },
  {
    category: "DevOps",
    name: "AWS",
    icon: "/assets/icons/AWS.svg",
    level: "Intermediário",
  },
];

const testSkills: Skill[] = [
  {
    category: "Test",
    name: "Jest",
    icon: "/assets/icons/Jest.svg",
    level: "Intermediário",
  },
];

const skills: Skill[] = [
  ...backEndSkills,
  ...frontEndSkills,
  ...databaseSkills,
  ...devOpsSkills,
  ...testSkills,
];

export default skills;
