import React from 'react'

const About = () => {
  return (
      <div className="container about">
      <h2 className="capitalize page-header">About me </h2>
      <div className="about-info">
        <p className=" capitalize desc coder-desc ">
          passionate frontend web developer with 3 years of experience creating user friendly websites
          <Link className="arrow-icon icon" to="./projects">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
          </Link>
        </p>
      </div>
      </div>
    
  )
}

export default About