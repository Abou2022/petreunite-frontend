import "../contact/FormStyles.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_ueg4ybw",
        "template_d9mi09m",
        form.current,
        "4r_t6hl2yML6GWN5o"
      );

      console.log(result.text);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error.text);
    }

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="form">
        {isSubmitted ? (
          <p>Thank you for contacting me!</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Your name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Required"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Required"
            />
            <label>Subject</label>
            <input type="text" name="subject" required placeholder="Required" />
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
        )}
      </div>
    </div>
  );
};

export default Form;
