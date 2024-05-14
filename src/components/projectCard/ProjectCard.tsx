"use client"
import { AiOutlineEye } from "react-icons/ai";
import {BiCodeAlt} from "react-icons/bi"

function ProjectCard({
  site,
  code,
  name,
  tools,
  description,
}: {
  site:string
  code:string
  name:string
  tools:string
  description:string
}) {
  return (
    <div className=" block w-full px-5 py-9 shadow-md bg-blue-200 shadow-blue-400 hover:shadow-blue-600 my-8">
      <span className="text-lg block capitalize">{name}</span>
      <span className="text-blue-600  text-sm block uppercase">{tools}</span>
        <span className="block"> {description}</span>
          
      <a
        href={site}
        target={"_blank"}
              rel="noopener noreferrer"
              className=" mr-4"
      >
        {" "}
              <AiOutlineEye className="inline-block"/> site
              
      </a>
          <a href={code} target={"_blank"} rel="noopener noreferrer"
          className="inline-block">
        {" "}
        <BiCodeAlt className="inline-block" /> code
      </a>
    </div>
  );
}


export default ProjectCard
