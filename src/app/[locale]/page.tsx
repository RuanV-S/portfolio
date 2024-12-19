"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Projects from "../components/Projects/Projects";
import ReusableDiv from "../components/ReusableDiv";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import AboutMe from "../components/AboutMe";
import Skill from "../components/Skills/Skill";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-white flex flex-col justify-between pb-32">
      <Header />

      <AboutMe />

      <main className="md:py-5 px-5 md:px-40 flex flex-col gap-20">
        <ReusableDiv>
          <p>
            <span className="text-white text-4xl">01</span>.{t("aboutMe.title")}
          </p>
          <p className="text-sm ml-5 mt-5 text-slate-400">
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

        <Experience />

        <Education />

        <Skill />

        <Projects />
      </main>
    </div>
  );
}
