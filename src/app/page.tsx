"use client";

import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skills/Skill";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-white flex flex-col justify-between pb-32">
      <Header />

      <AboutMe />

      <main className="md:py-5 px-5 md:px-40 flex flex-col gap-20">
        <Experience />

        <Education />

        <Projects />

        <Skill />
      </main>
    </div>
  );
}
