import React from "react";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Log In</h1>
      <input type="email" placeholder="someone@gmail.com" />
      <input type="password" placeholder="password" />
      <button>Log In</button>
      <button>Forgot your password?</button>
      <button>Don't have an account? Sign Up</button>
    </div>
  );
};
