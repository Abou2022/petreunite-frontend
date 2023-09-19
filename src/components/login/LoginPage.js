import "../login/LoginPage.css";
import React, { useState } from "react";

function LoginPage() {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., check credentials, make API request)

    // For this example, we'll just log the input values to the console
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
