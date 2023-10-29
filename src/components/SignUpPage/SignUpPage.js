import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

export const SignUpPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSignUpClicked = async () => {
    if (!validateEmail(emailValue)) {
      setErrorMessage("Invalid email address.");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        email: emailValue,
        password: passwordValue,
      });

      if (response.data && response.data.error === 409) {
        setErrorMessage(
          "Email already exists. Please use a different email address or sign in"
        );
        // return;
        console.log("Response data:", response.data);
      } else {
        const { token } = response.data;
        setToken(token);
        navigate("/userInfo");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during signup.");
      }
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign Up</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}

        <input
          className="login-input"
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          className="login-input"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          className="login-input"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          placeholder="someone@gmail.com"
        />
        <input
          className="login-input"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          className="login-input"
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          type="password"
          placeholder="password"
        />
        <hr />
        <button
          className="login-button"
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onSignUpClicked}
        >
          Sign Up
        </button>
        <div className="login-links">
          <button onClick={() => navigate("/login")}>
            Already have an account? Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
