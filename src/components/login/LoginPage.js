import "../login/LoginPage.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const LoginPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Use state to keep track of the session timeout timer
  const [sessionTimeout, setSessionTimeout] = useState(null);

  useEffect(() => {
    // Retrieve user information and session expiration time from localStorage on component mount
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedExpiration = localStorage.getItem("expiration");

    if (storedUser && storedToken && storedExpiration) {
      const user = JSON.parse(storedUser);

      // Check if the session has not expired
      if (new Date(storedExpiration) > new Date()) {
        setEmailValue(user.email);
        setToken(storedToken);

        // Set a new session timeout based on the remaining time
        const remainingTime = new Date(storedExpiration) - new Date();
        setSessionTimeout(setTimeout(handleSessionTimeout, remainingTime));
      }
    }
  }, [setToken]);

  const handleSessionTimeout = () => {
    // Clear the session timeout and log the user out
    clearTimeout(sessionTimeout);
    setSessionTimeout(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    setErrorMessage("Session has expired. Please log in again.");
  };

  const onLogInClicked = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email: emailValue,
        password: passwordValue,
      });
      const { token, expiration } = response.data;

      // Set the user information, token, and session expiration in localStorage
      localStorage.setItem("user", JSON.stringify({ email: emailValue }));
      localStorage.setItem("token", token);
      localStorage.setItem("expiration", expiration);

      setToken(token);
      setErrorMessage("");

      // Clear any existing session timeout and set a new one
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
      }
      setSessionTimeout(setTimeout(handleSessionTimeout, 15 * 60 * 1000)); // 15 minutes

      navigate("/userInfo");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Wrong email or password. Please try again.");
      } else {
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
        <div className="password-input-container">
          <input
            className="login-input"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="password"
          />
          <button
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <hr />
        <button
          className="login-button"
          disabled={!emailValue || !passwordValue}
          onClick={onLogInClicked}
        >
          Log In
        </button>
        <div className="login-links">
          <button onClick={() => navigate("/signup")}>
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
