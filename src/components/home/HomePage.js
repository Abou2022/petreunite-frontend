import "../home/HomePage.css";

import React from "react";
import { Link } from "react-router-dom"; // Import the Link component if you're using React Router

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to PetReunite</h1>
        <p>Reuniting Pets with Their Owners</p>
      </header>

      <main>
        <section className="hero">
          <h2>Find Lost Pets</h2>
          <p>
            Help lost pets find their way back home by browsing listings or
            reporting a found pet.
          </p>
          <Link to="/lost-pets" className="btn-primary">
            Browse Lost Pets
          </Link>
        </section>

        <section className="hero">
          <h2>Reunite Families</h2>
          <p>
            Help pet owners find their missing companions. Report found pets and
            make a difference.
          </p>
          <Link to="/found-pets" className="btn-primary">
            Report a Found Pet
          </Link>
        </section>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} PetReunite. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
