import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ProjectSection from "@/components/sections/projectSection/projectSection";
import AboutSection from "@/components/sections/aboutSection/AboutSection";
import ToolSection from "@/components/sections/toolsSection/ToolSection";
import ContactMeSection from "@/components/contactMeSection/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:h-screen flex-col items-center justify-between lg:p-24 lg:pr-10 pb-0 p-5 pt-9 md:pt-20 md:p-8 lg:pt-24 lg:pb-0 text-sm md:text-md">
      <div className="flex  flex-col w-full gap-5 overflow-hidden lg:flex-row">
        <div className="w-full lg:w-3/6 overflow-auto">
          <Navbar />
          <Hero />
        </div>

        <div className="w-full lg:w-3/6 overflow-auto no-scrollbar">
          <ProjectSection />
          <AboutSection />
          <ToolSection />
          <ContactMeSection/>
        </div>
      </div>
    </main>
  );
}
