import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from './../../../draftTest.json' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const param = useParams()
   let projectsName = param.id
  const [selectedProjects , setSelectedProjects ] = useState()
  console.log(projectsData[])
  console.log(projectsName)
 
  return (
    <div className="container">
    Test
    <div className="Projects-items mains">
    {projectsData.map((item) => {
      return (
        <div className="flex-column project-item">
          <img src={ require(`./../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
          <h4 className="capitalize project-name">
            {item.projectName} 
            <Link className="arrow-icon icon project-link" to={item.projectURL}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
            </Link>
          </h4>          
        </div>
          )
        })}
    </div>
      
    </div>
  )
}

export default Test