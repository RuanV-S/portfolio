import Link from "next/link";
import SociaisIcons from "./Sociais";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("homePage");

  return (
    <section className="py-10 md:px-40 px-5 lg:pt-60 mb-10 md:mb-40">
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
        <div className="flex my-5   md:mx-20 flex-col items-start ">
          <span className="text-4xl font-extrabold text-slate-300">
            {t("title")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold">Ruan Vieira 👋</h1>
          <span className="text-2xl   font-extrabold text-cyan-100">
            {t("stack")}
          </span>
          <Link
            href="https://simplfiycode.s3.sa-east-1.amazonaws.com/Ruan/CV_RUAN_VIEIRA_DA_SILVA.pdf"
            target="_blank"
            className="font-extrabold text-2xl text-white w-10 flex rounded-md"
          >
            {t("cv")}
            <i className="mt-1 bx bxs-download text-cyan-100"></i>
          </Link>
        </div>
      </div>
      <SociaisIcons />
    </section>
  );
};

export default AboutMe;
