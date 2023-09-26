// login.js

import "../login/LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// const { users } = require("../path/to/seed");
const url = "http://localhost:3001/api/user";
console.log("........", url);

function LoginPage() {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Successful login, handle user data or redirect to another page
      const userData = await response.json();
      console.log("Logged in user data:", userData);

      // Redirect to the browser page
      navigate("/browse");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
