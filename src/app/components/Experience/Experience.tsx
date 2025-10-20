import { useTranslations } from "next-intl";
import ReusableDiv from "../ReusableDiv";

import { useState } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const t = useTranslations("homePage.experience");
  const keys = ["simplify"];
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpandedKeys((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <ReusableDiv>
      <p className="text-4xl text-black dark:text-white font-bold tracking-widest mb-8">
        01<span className="text-cyan-100">.{t("title")}</span>
      </p>
      <div className="grid grid-cols-1 gap-8">
        {keys.map((key) => (
          <ExperienceItem
            key={key}
            keyName={key}
            isExpanded={expandedKeys[key]}
            onToggle={() => toggleExpand(key)}
          />
        ))}
      </div>
    </ReusableDiv>
  );
};

export default Experience;
