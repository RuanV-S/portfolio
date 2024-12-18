"use client";

import Image from "next/image";
import skills from "./Skills";
import { useTranslations } from "next-intl";

interface SkillListProps {
  category: string;
}

const SkillList: React.FC<SkillListProps> = ({ category }) => {
  const t = useTranslations("homePage.expertise.skills");
  const filteredSkills = skills.filter((skill) => skill.category === category);

  return (
    <div className="flex flex-col w-full max-w-full ml-5">
      <span className="text-lg text-slate-300">{category}</span>
      {filteredSkills.map((skill, index) => (
        <div
          key={index}
          className="flex hover:-translate-y-1 transition-transform duration-300 ease-in-out bg-cinza text-wrap rounded-xl mr-20 p-1 mb-5"
        >
          <Image
            src={skill.icon}
            className="rounded-xl"
            alt={skill.name}
            style={{
              width: 41,
              height: 41,
            }}
            width={41}
            height={41}
          />
          <div className="flex items-center text-white text-base pl-5 mr-10 w-full justify-between">
            <p>{skill.name}</p>
            <p>{t(skill.level)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;