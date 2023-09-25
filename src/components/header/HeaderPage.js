import React from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <div>
      <header>
        <Link to="/" className="navbar-logo">
          {" "}
          <h1>Welcome to PetReunite</h1>
        </Link>
        <p>Reuniting Pets with Their Owners</p>
      </header>
    </div>
  );
};

export default HeaderPage;
