import "../contact/FormStyles.css";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ueg4ybw",
        "template_d9mi09m",
        form.current,
        "4r_t6hl2yML6GWN5o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your name</label>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Required"
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Required"
          ></input>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Required"
          ></input>
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Type your message here (Required)"
            name="message"
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
