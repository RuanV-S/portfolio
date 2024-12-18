import ReusableDiv from "../ReusableDiv";
import { useTranslations } from "next-intl";
import EducationItem from "./EducationItem";

const Education = () => {
  const t = useTranslations("homePage.education");
  const keys = ["fiap"];

  return (
    <ReusableDiv>
      <p>
        <span className="text-white text-4xl tracking-widest">03</span>.
        {t("title")}
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
