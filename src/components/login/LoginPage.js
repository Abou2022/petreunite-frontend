// login.js

import "../login/LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { users } = require("../path/to/seed"); // Import the seed data

function LoginPage() {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Check if the user exists in the seed data
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Login failed");
      }

      // Successful login, handle user data or redirect to another page
      console.log("Logged in user data:", user);

      // Redirect to the browser page or perform other actions
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
