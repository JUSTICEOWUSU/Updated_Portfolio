import React from 'react'

function Navbar() {
  return (
    <div className="flex w-11/12 justify-between items-center capitalize mb-5 text-lg">
      <span className="text-black font-semibold uppercase text-lg">
        <a href="#home">
          Justice<span className="text-blue-500">{":>"}</span>
        </a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md">
        <a href="#projects">projects</a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md">
        <a href="#about">about</a>
      </span>
      <span className="hover:text-blue-500 text-sm md:text-md">
        <a href="#contact">contact</a>
      </span>
    </div>
  );
}

export default Navbar
