import React from 'react'
import ProjectCard from '@/components/projectCard/ProjectCard'

function ProjectSection() {
  return (
    <div id="projects" className="mt-12 lg:mt-0">
      <h2 className="text-lg uppercase mb-0">projects</h2>

      <ProjectCard
        name={"Frontend Quiz app"}
        tools={"React + typescript + style Component"}
        description={"A Quiz Application for frontend developers "}
        site={"https://frontend-quiz-app-gules.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/frontend-quiz-app"}
      />

      <ProjectCard
        name={"justice clothing"}
        tools={"typescript + nodejs + css module"}
        description={"E-commerce app for seamless online shopping "}
        site={"https://justice-clothing.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/Justice-clothing"}
      />

      <ProjectCard
        name={"linxmarketix"}
        tools={"react + node js + bootstrap + express js "}
        description={"Agency app for effortless digital marketing"}
        site={"https://linxmarketix.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/LINXMARKETIX"}
      />
      <ProjectCard
        name={"nasa mission control"}
        tools={"nodejs + express + mongo db"}
        description={"Mission control api for Nasa space exploration"}
        site={"https://nasa-mission-control-api.vercel.app/"}
        code={"https://github.com/JUSTICEOWUSU/NASA-MISSION-CONTROL-API"}
      />
    </div>
  );
}

export default ProjectSection
