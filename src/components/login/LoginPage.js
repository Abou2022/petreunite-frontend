import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const onLogInClicked = async () => {
    alter("login is not implemented");
  };
  return (
    <div className="login-page">
      <h1>Log In</h1>
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
      <button onClick={onLogInClicked}>Log In</button>
      <button>Forgot your password?</button>
      <button>Don't have an account? Sign Up</button>
    </div>
  );
};
