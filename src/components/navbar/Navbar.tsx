import React from 'react'

function Navbar() {
  return (
    <div className="flex w-11/12 justify-between items-center capitalize mb-5 text-lg">
      <span className="text-black font-semibold uppercase text-lg lg:text-xl">
        <a href="#home">
          Justice<span className="text-blue-500">{":>"}</span>
        </a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md lg:text-lg">
        <a href="#projects">projects</a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md lg:text-lg">
        <a href="#about">about</a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md lg:text-lg">
        <a href="#contact">contact</a>
      </span>
    </div>
  );
}

export default Navbar
