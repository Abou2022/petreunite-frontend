import "../home/HomePage.css";

import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "../auth/useToken";

const HomePage = () => {
  const [token] = useToken();

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to PetReunite</h1>
        <p>Reuniting Pets with Their Owners</p>
      </header>
      <main>
        <section className="signup-section">
          <h2>Sign Up</h2>
          <p>
            Join our community and help reunite lost pets with their owners.
          </p>
          <Link to="/signup" className="btn-primary">
            Sign Up
          </Link>
        </section>

        <section className="login-section">
          <h2>Login</h2>
          <p>
            Already a member? Log in to report lost or found pets and make a
            difference.
          </p>
          <Link to="/login" className="btn-secondary">
            Log In
          </Link>
          {/* Additional button for users who are already logged in */}
          {token && (
            <Link to="/userInfo" className="btn-primary">
              Go to UserInfo
            </Link>
          )}
        </section>

        <section className="browse-section">
          <h2>Browse</h2>
          <p>Check your pet</p>
          <Link to="/browse" className="btn-primary">
            Browse
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
