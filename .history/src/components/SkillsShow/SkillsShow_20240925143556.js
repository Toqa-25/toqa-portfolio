import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import css from'./../../images/skills/css.svg'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow">
        <h3>SkillsShowImagescss svg not working</h3>
        <img src={css}  alt=""/>
        <img src={require("./../../images/skills/wordpress.png")}  alt=""/>
        <img src="/images/wordpress.png"  alt=""/>
        <img src="/images/wordpress.png"  alt=""/>
        <img src="/images/wordpress.png"  alt=""/>
        
    </div>
  )
}

export default SkillsShow