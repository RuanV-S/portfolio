import { useTranslations } from "next-intl";
import Image from "next/image";

interface ExperienceItemProps {
  keyName: string;
}

const EducationItem = ({ keyName }: ExperienceItemProps) => {
  const t = useTranslations("homePage.education");

  return (
    <div className="flex w-full ml-5 max-w-full mt-10">
      <Image
        src={`/assets/company/${keyName}.png`}
        className="rounded-md  hidden sm:block"
        alt={t(`institutions.${keyName}.institution`)}
        width={400}
        height={400}
        style={{
          objectFit: "cover",
          width: "120px",
          height: "120px",
        }}
      />
      <div className="ml-5">
        <p className="text-white flex flex-col sm:flex-row">
          {t(`institutions.${keyName}.institution`)}
          <span className="text-sm mt-2 sm:mt-3 sm:ml-5 text-slate-300">
            {t(`institutions.${keyName}.duration`)}
          </span>
        </p>
        <p className="text-sm text-slate-300">
          {t(`institutions.${keyName}.location`)}
        </p>
        <span className="text-base text-slate-400">
          {t(`institutions.${keyName}.degree`)}
        </span>
      </div>
    </div>
  );
};

export default EducationItem;
