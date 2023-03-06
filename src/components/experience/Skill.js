import React from 'react'
import "../../styles/css/experience.css"
const Skill = ({text, logo, color}) => {
  return (
    <div className='experience_skill' style={{backgroundColor: color}}>
        <img alt="" src={logo} height="55"/>
        <p>{text}</p>
    </div>
  )
}

export default Skill