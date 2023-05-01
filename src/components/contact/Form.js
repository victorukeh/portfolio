import React from "react";
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
          icon="https://drive.google.com/uc?export=view&id=13hhRRgC3s6EVcZX7cXBfUJk_vFKeNgQH"
        />
        <ContactInfo text="(+234)904-665-9704" color="#55c2f2" icon="https://drive.google.com/uc?export=view&id=1AtyN-w_VHkHSqfujNyg4rRNcDlOXxJOk" />
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
          id="outlined-basic"
          label="Your message here..."
          variant="filled"
          style={{height: "60px"}}
          multiline={true}
          rows="4"
          fullWidth
        />
      </div>
      <Button variant="text" style={{ marginTop: "100px" }}>
        Send Message
      </Button>
    </div>
  );
};

export default Form;
