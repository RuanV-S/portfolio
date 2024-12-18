import { useTranslations } from "next-intl";
import ReusableDiv from "../ReusableDiv";
import SkillList from "./SkillList";

const Skill = () => {
  const t = useTranslations("homePage.expertise");

  return (
    <ReusableDiv>
      <p>
        <span className="text-white text-4xl tracking-widest">04</span>.
        {t("title")}
      </p>

      <div className="grid grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 ">
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
