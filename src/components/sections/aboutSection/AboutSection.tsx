import React from 'react'

function AboutSection() {
  return (
    <div id='about'>
      <h2 className="text-xl uppercase mt-[5rem]">about</h2>

      <div  className=''>
        <div className="">
          <p className="py-3">
            A Fullstack Javascript developer with ground Knowledge in MERN Stack
            with Redux/toolkit, along with Proneness of developing web
            application with outmost efficiency. Great Professional with
            certificate from FreeCodeCamp and currently a Middler University
            student pursuing BSC Geomatic Engineering( Geodesy and Computer
            Science ). willing to be an asset of any freelance organization,
            part time job or Intern.
          </p>

          <span className="">
            <h4 className='text-lg font-[500]'>Few highlights</h4>
              <li >
                <span>FullStack web development </span>
              </li>
              <li>
                {" "}
                <span>Responsive and interactive Front End per design </span>
              </li>
              <li>
                {" "}
                <span>Redux and Redux/toolkit for State management </span>
              </li>
              <li>
                {" "}
                <span>
                  Node JS, Express JS, MongoDB (All Back End technologies){" "}
                </span>
              </li>
              <li>
                {" "}
                <span>GraphQL/Apollo, Socket.io </span>
              </li>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutSection
