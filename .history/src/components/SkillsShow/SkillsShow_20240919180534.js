import './SkillsShow.css'
import images from './images.json'

import React from 'react'

const SkillsShow = () => {
  return (
    <div>SkillsShow
    <img src="images/skills/html.svg"  alt=""/>
    <img src={images[1].img}  alt=""/>
    </div>
  )
}

export default SkillsShow