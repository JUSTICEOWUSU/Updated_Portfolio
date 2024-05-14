"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div id="home" className="w-full lg:w-11/12 pt-8 overflow-auto">
      <h1 className=" text-3xl md:text-4xl font-semibold">
        <span className="capitalize font-normal text-xl">
          Hello 👋🏿, <br />{" "}
        </span>
        I'm <span className="text-blue-500">Justice Owusu</span>
      </h1>

      <div className="w-full text-center font-semibold text-xl md:text-2xl my-3">
        <TypeAnimation
          sequence={[
            "Fullstack Dev",
            1000,
            "Javascript Dev💻",
            1000,
            "Node.JS Dev",
            1000,
            "React.JS Dev",
            1000,
          ]}
          // @ts-ignore
          Speed={90}
          repeat={Infinity}
        />
      </div>

      <h3 className="my-6 ">
        I'm a passionate web developer skilled in creating web applications that
        seamlessly blend frontend and backend functionalities. I specialize in
        crafting functional and visually appealing websites using the latest
        tools. I'm driven by a constant desire to learn and take on new
        challenges, all with the aim of delivering exceptional user experiences.
      </h3>
      <a href="/Resume_Owusu Justice.pdf" download="Resume_Justice Owusu.pdf">
        <button className="w-full block p-4 text-center font-semibold capitalize text-xl md:text-2xl shadow-blue-400 shadow-sm my-3">
          {" "}
          download resume
        </button>
      </a>

      <div className="flex text-gray-600  bottom-0 w-full md:w-10/12 justify-between items-center mt-12">
        <button className="capitalize hover:text-black">
          <a
            href="https://github.com/JUSTICEOWUSU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl" />
            <span className="texl-xl">github</span>
          </a>
        </button>

        <button className="capitalize hover:text-pink-500">
          <a
            href="https://instagram.com/_owusudev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiInstagram className="text-4xl" />
            <span className="texl-xl">instagram</span>
          </a>
        </button>

        <button className="capitalize hover:text-blue-600">
          <a
            href="https://www.linkedin.com/in/justice-owusu-43a0a1299"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="text-4xl" />
            <span className="texl-xl">linkedIn</span>
          </a>
        </button>

        <button className="capitalize hover:text-black">
          <a
            href="https://twitter.com/_owusudev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine className="text-4xl" />
            <span className="texl-xl">twitter</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero
