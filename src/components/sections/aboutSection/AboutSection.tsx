import React from 'react'

function AboutSection() {
  return (
    <div id="about">
      <h2 className="text-xl uppercase mt-[5rem]">about</h2>

      <div className="">
        <div className="">
          <p className="py-3 text-[1rem] md:text-[1.1rem] leading-6">
            A Fullstack Javascript developer with ground Knowledge in MERN Stack
            with Redux/toolkit, along with Proneness of developing web
            application with outmost efficiency. Great Professional with
            certificate from FreeCodeCamp and currently a Final University
            student pursuing BSC Geomatic Engineering( Geodesy and Computer
            Science ). willing to be an asset of any organization.
          </p>

          <span className="text-[1rem] md:text-[1.1rem]">
            <h4 className="text-lg font-[500]">Few highlights</h4>
            <li className="text-[0.9rem] md:text-[1rem]">
              <span>FullStack web development </span>
            </li>
            <li className='text-[0.9rem] md:text-[1rem]'>
              {" "}
              <span>Responsive and interactive Front End per design </span>
            </li>
            <li className='text-[0.9rem] md:text-[1rem]'>
              {" "}
              <span>Redux and Redux/toolkit for State management </span>
            </li>
            <li className='text-[0.9rem] md:text-[1rem]'>
              {" "}
              <span>
                Node JS, Express JS, MongoDB (All Back End technologies){" "}
              </span>
            </li>
            <li className='text-[0.9rem] md:text-[1rem]'>
              {" "}
              <span>GraphQL/Apollo, firebase, Socket.io </span>
            </li>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutSection
