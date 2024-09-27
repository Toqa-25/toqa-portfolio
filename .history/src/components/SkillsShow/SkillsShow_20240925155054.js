import './SkillsShow.css'
import images from './images.json'
import HTMLImg from'./../../images/skills/html.svg'
import CSSImg from'./../../images/skills/css.svg'
import JSImg from'./../../images/skills/javascript.svg'
import ResponsiveImg from'./../../images/skills/responsive.svg'
import ReactImg from'./../../images/skills/react.svg'
import SCSSImg from'./../../images/skills/sass.svg'
import BootstrapImg from'./../../images/skills/bootstrap.svg'
import WordpressImg from'./../../images/skills/wordpress.png'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow container">
        <ul className="skillShow-items">
          <li className="skillShow-item">
            <img src={CSSImg }  alt=""/>
            <img src={HTMLImg }  alt=""/>
            <img src={JSImg }  alt=""/>
            <img src={ResponsiveImg }  alt=""/>
            <img src={ReactImg }  alt=""/>
            <img src={SCSS}  alt=""/>
            <img src={Bootstrap}  alt=""/>
            <img src={Wordpress}  alt=""/>
          </li>
         
          </ul>
        
    </div>
  )
}

export default SkillsShow