import "../login/LoginPage.css";
import React, { useState } from "react";

function LoginPage() {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        // Replace with your login API endpoint
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
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Function to handle registration

  return (
    <div className="login-wrapper">
      <div className="container">
        <h2>Login or Register</h2>
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
