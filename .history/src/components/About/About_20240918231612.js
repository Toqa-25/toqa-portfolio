import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'



const About = () => {
 
  return (
      <div className="container about flex-column">
        <h2 className="capitalize page-header">About me </h2>
        <div className="about-info">
          <p className=" capitalize desc coder-desc ">
            passionate frontend web developer with 3 years of experience creating user friendly websites
            <Link className="arrow-icon icon" to="./projects">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
            </Link>
          </p>
          <p className="capitalize desc coder-desc ">
            I start my  journey of learning from 
            <Link to="https://elzero.org" className="special-color capitalize elzero" >elzero academy</Link>,
             and  I continue  in it because I'm passionate about what i do
          </p>
          <p class="desc coder-desc ">
          I have more   than 3 years of experience in this field, and I'm passionate about my job so I can code any design into HTML, CSS, Bootstrap, SCSS and JS in responsive design for all screens
          </p>
        
        </div>
        <Skills />
       
      </div>
    
  )
}

export default About
