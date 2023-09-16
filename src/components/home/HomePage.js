import "../home/HomePage.css";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;
