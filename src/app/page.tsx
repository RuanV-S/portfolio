"use client";

import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-10 h-fit">
            <Sidebar />
          </aside>

          {/* CONTENT */}
          <main className="lg:col-span-8 space-y-24">
            <Experience />
            <Projects />
            <Skill />
            <Education />
          </main>
        </div>
      </div>
    </div>
  );
}
