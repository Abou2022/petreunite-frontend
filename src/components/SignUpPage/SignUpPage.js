import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const navigate = useNavigate();

  const onSignUpClicked = async () => {
    //     alter("sign up is not implemented yet");
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
          // type="password"
          placeholder="First Name"
        />
        <input
          className="login-input"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          // type="password"
          placeholder="Last Name"
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
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          placeholder="someone@gmail.com"
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
