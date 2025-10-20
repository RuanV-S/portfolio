import SociaisIcons from "./Sociais";
import Image from "next/image";
import { useTranslations } from "next-intl";

import ReusableDiv from "./ReusableDiv";

const AboutMe = () => {
  const t = useTranslations("homePage");

  return (
    <section className="md:px-40 px-5 lg:pt-60 mb-10 md:mb-20">
      <div className="flex md:flex-row flex-col md:mt-0 mt-40">
        <Image
          src="/assets/ruan.jpg"
          alt="Foto de Perfil"
          className="rounded-3xl shadow-md "
          style={{
            objectFit: "cover",
            width: 400,
            height: 400,
          }}
          width={300}
          height={300}
        />
        <div className="flex my-5 text-light-text dark:text-dark-text md:mx-20 flex-col items-start  ">
          <div className="flex gap-2">
            <span className="text-3xl  font-extrabold text-black dark:text-white">
              {t("title")}
            </span>
            <h1 className="text-3xl font-extrabold text-black dark:text-white  ">
              Ruan Vieira 👋
            </h1>
          </div>

          <span className="text-sm   font-extrabold text-cyan-100">
            {t("stack")}
          </span>

          <ReusableDiv>
            <p className="text-sm mt-5 dark:text-slate-100 text-black">
              {t("aboutMe.description")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </ReusableDiv>
        </div>
      </div>
      <SociaisIcons />
    </section>
  );
};

export default AboutMe;
