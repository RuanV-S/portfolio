import { useTranslations } from "next-intl";
import Image from "next/image";

interface ExperienceItemProps {
  keyName: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceItem = ({
  keyName,
  isExpanded,
  onToggle,
}: ExperienceItemProps) => {
  const t = useTranslations("homePage.experience");
  const description = t(`companys.${keyName}.description`);

  const formattedDescription = description.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const displayText = isExpanded
    ? formattedDescription
    : description
        .slice(0, 210)
        .split("\n")
        .map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ));

  return (
    <div className="flex w-full ml-5 max-w-full mt-10">
      <Image
        src={`/assets/company/${keyName}.png`}
        className="rounded-md hidden sm:block"
        alt={t(`companys.${keyName}.company`)}
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
          {t(`companys.${keyName}.company`)}
          <span className="text-sm mt-2 sm:mt-3 sm:ml-5 text-slate-300">
            {t(`companys.${keyName}.duration`)}
          </span>
        </p>
        <p className="text-sm text-slate-300 mt-1">
          {t(`companys.${keyName}.location`)}
        </p>
        <div className="text-sm text-slate-400 mt-1">
          <p>{displayText}</p>
          <button
            onClick={onToggle}
            className="text-cyan-100 hover:underline focus:outline-none mt-2"
          >
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
