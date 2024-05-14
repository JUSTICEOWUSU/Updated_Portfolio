import React from 'react'


import { DiJavascript, DiGit } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiJquery,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

const myArray = [
  {
    name: "HTML",
    icon: AiOutlineHtml5,
  },

  {
    name: "CSS",
    icon: IoLogoCss3,
  },

  {
    name: "javascript",
    icon: DiJavascript,
  },

  {
    name: "react.js",
    icon: FaReact,
  },

  {
    name: "tailwind css",
    icon: SiTailwindcss,
  },

  {
    name: "Typescript",
    icon: SiTypescript,
  },

  {
    name: "redux",
    icon: SiRedux,
  },

  {
    name: "bootstrap",
    icon: FaBootstrap,
  },

  {
    name: "jQuery",
    icon: SiJquery,
  },

  {
    name: "node.js",
    icon: FaNodeJs,
  },

  {
    name: "express.js",
    icon: SiExpress,
  },

  {
    name: "mongoDB",
    icon: SiMongodb,
  },

  {
    name: "socket.io",
    icon: SiSocketdotio,
  },

  {
    name: "firebase",
    icon: SiFirebase,
  },

  {
    name: "graphql",
    icon: SiGraphql,
  },

  {
    name: "git",
    icon: DiGit,
  },

  {
    name: "github",
    icon: BsGithub,
  },
];



function ToolSection() {
  return (
    <div>
      <h2 className="text-lg uppercase mt-[5rem] mb-3 ">
        The technologies i currently work on
      </h2>

      <div>
        <div className="flex w-full flex-wrap  space-2">
          {myArray.map((object,index) => {
            const Comp = object.icon;
            return (
              <span className="w-4/12 lg:w-3/12 block  shrink-0 shadow-sm p-5 py-7 shadow-blue-500 " key={index}>
                <div className="flex flex-col items-center justify-center">
                  <h6 className="">{object.name}</h6>
                  <span>
                    <Comp className="text-md" />
                  </span>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ToolSection
