import { useTranslations } from "next-intl";
import ReusableDiv from "../ReusableDiv";
import SkillList from "./SkillList";

const Skill = () => {
  const t = useTranslations("homePage.expertise");

  return (
    <ReusableDiv>
      <p className="mb-10 text-cyan-100">
        <span className="text-black dark:text-white   tracking-widest">03</span>
        .{t("title")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 ">
        <SkillList category="Front-End" />
        <SkillList category="Back-End" />
        <SkillList category="Database" />
        <SkillList category="DevOps" />
        <SkillList category="Test" />
      </div>
    </ReusableDiv>
  );
};

export default Skill;
