import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import CSS from'./../../images/skills/css.svg'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow">
        <div className="skillShow-item">
        <img src={CSS}  alt=""/>
        
    </div>
  )
}

export default SkillsShow