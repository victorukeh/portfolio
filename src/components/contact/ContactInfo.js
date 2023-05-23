import React from 'react'
// import { LazyLoadImage } from "react-lazy-load-image-component";
const ContactInfo = ({color, icon, text}) => {
  return (
    <div className='contact__info' style={{backgroundColor: color}}>
      <img src={icon}
      height={40}
        alt="contact"
      />
        <h4>{text}</h4>
    </div>
  )
}

export default ContactInfo