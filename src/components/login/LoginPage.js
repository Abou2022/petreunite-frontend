import "../login/LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const LoginPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const onLogInClicked = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setToken(token);
      navigate("/userInfo");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized (401) indicates wrong email or password
        setErrorMessage("Wrong email or password. Please try again.");
      } else {
        // Handle other errors (e.g., server issues)
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Log In</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
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
        <hr />
        <button
          className="login-button"
          disabled={!emailValue || !passwordValue}
          onClick={onLogInClicked}
        >
          Log In
        </button>
        <div className="login-links">
          {/* <button onClick={navigate("/forgot-password")}>
            Forgot your password?
          </button> */}
          <button onClick={() => navigate("/signup")}>
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
