import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import ContactInfo from "./ContactInfo";
import emailjs from "emailjs-com";
import Message from "./Message";
import "../../styles/css/contact.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState(null);
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setOpen(true);
          setResult("Message delivered");
          setValue("success");
        },
        (error) => {
          setOpen(true);
          console.log("Result: ", result);
          setResult(error);
          setValue("error");
        }
      );
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      
     {open && <Message message={result} value={value} open={open} setOpen={setOpen}/>}
      <h2> Take a coffee & chat with me </h2>
      <div className="info">
        <ContactInfo
          text="victorukeh1@gmail.com"
          color="#f6f6f6"
          icon="https://drive.google.com/uc?export=view&id=13hhRRgC3s6EVcZX7cXBfUJk_vFKeNgQH"
        />
        <ContactInfo
          text="(+234)904-665-9704"
          color="#55c2f2"
          icon="https://drive.google.com/uc?export=view&id=1AtyN-w_VHkHSqfujNyg4rRNcDlOXxJOk"
        />
      </div>
      <div className="contact__form__texts">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          className="margins"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          className="margins"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          id="standard-basic"
          label="Subject"
          variant="standard"
          className="margins"
          value={subject}
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="contact__form__texts">
        <TextField
          id="outlined-basic"
          label="Your message here..."
          variant="filled"
          style={{ height: "60px" }}
          multiline={true}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          name="body"
          fullWidth
          required
        />
      </div>

      <Button variant="text" style={{ marginTop: "100px" }} type="submit">
          Send Message
      </Button>
    </form>
  );
};

export default Form;
