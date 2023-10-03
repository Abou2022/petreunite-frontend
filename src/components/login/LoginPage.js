import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const onLogInClicked = async () => {
    alter("login is not implemented");
  };
  return (
    <div className="login-page">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        type="email"
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={navigate("/forgot-password")}>
        {" "}
        Forgot your password?
      </button>
      <button onClick={navigate("/signup")}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
};
