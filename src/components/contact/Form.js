import React from 'react'
import envelope from "../../styles/images/envelope.png"
import phone from "../../styles/images/phone.png"
import ContactInfo from "./ContactInfo";

const Form = () => {
  return (
    <div className="contact__form">
        <h2> Take a coffee & chat with me </h2>
        <div className="info">
          <ContactInfo text="victorukeh1@gmail.com" color="#f6f6f6" icon={envelope}/>
          <ContactInfo text="(+234)904-665-9704" color="#55c2f2" icon={phone}/>
      </div>
    </div>
  )
}

export default Form