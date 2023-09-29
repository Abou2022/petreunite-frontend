import "../login/LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const url = "http://localhost:3001/api/login";

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Welcome in!");

        // Successful login, handle user data or redirect to another page
        const userData = await response.json(); // Assuming your user data is in the response JSON
        console.log("Logged in user data:", userData);

        // Redirect to the browser page
        navigate("/browse");
      } else {
        throw new Error("Login failed");
      }
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
