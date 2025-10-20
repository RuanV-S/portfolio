import ReusableDiv from "../ReusableDiv";
import { useTranslations } from "next-intl";
import EducationItem from "./EducationItem";

const Education = () => {
  const t = useTranslations("homePage.education");
  const keys = ["fiap"];

  return (
    <ReusableDiv>
      <p className="text-4xl text-black dark:text-white font-bold tracking-widest mb-8">
        02<span className="text-cyan-100">.{t("title")}</span>
      </p>

      <div className="grid grid-cols-1 gap-8">
        {keys.map((key) => (
          <EducationItem key={key} keyName={key} />
        ))}
      </div>
    </ReusableDiv>
  );
};

export default Education;
