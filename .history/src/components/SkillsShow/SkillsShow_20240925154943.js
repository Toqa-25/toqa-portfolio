import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import CSS from'./../../images/skills/css.svg'
import JS from'./../../images/skills/javascript.svg'
import Responsive from'./../../images/skills/responsive.svg'
import React from'./../../images/skills/react.svg'
import SCSS from'./../../images/skills/sass.svg'
import BootstrapImg from'./../../images/skills/bootstrap.svg'
import Wordpress from'./../../images/skills/wordpress.png'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow container">
        <ul className="skillShow-items">
          <li className="skillShow-item">
            <img src={CSS}  alt=""/>
            <img src={HTML}  alt=""/>
            <img src={JS}  alt=""/>
            <img src={Responsive}  alt=""/>
            <img src={React}  alt=""/>
            <img src={SCSS}  alt=""/>
            <img src={Bootstrap}  alt=""/>
            <img src={Wordpress}  alt=""/>
          </li>
         
          </ul>
        
    </div>
  )
}

export default SkillsShow