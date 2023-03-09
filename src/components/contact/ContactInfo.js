import React from 'react'

const ContactInfo = ({color, icon, text}) => {
  return (
    <div className='contact__info' style={{backgroundColor: color}}>
        <img alt="" src={icon} height="40"/>
        <h4>{text}</h4>
    </div>
  )
}

export default ContactInfo