import React from "react";
import envelope from "../../styles/images/envelope.png";
import phone from "../../styles/images/phone.png";
import ContactInfo from "./ContactInfo";
import { TextField, Button } from "@mui/material";
import "../../styles/css/contact.css";

const Form = () => {
  return (
    <div className="contact__form">
      <h2> Take a coffee & chat with me </h2>
      <div className="info">
        <ContactInfo
          text="victorukeh1@gmail.com"
          color="#f6f6f6"
          icon={envelope}
        />
        <ContactInfo text="(+234)904-665-9704" color="#55c2f2" icon={phone} />
      </div>
      <div className="contact__form__texts">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          className="margins"
        />
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          className="margins"
          required
        />
        <TextField
          id="standard-basic"
          label="Subject"
          variant="standard"
          className="margins"
        />
      </div>
      <div className="contact__form__texts">
        <TextField
          id="standard-helperText"
          defaultValue="Your message here..."
          variant="standard"
          fullWidth
        />
      </div>
      <Button variant="text" style={{marginTop: "40px"}}>Send Message</Button>
    </div>
  );
};

export default Form;
