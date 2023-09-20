import "../browsePage/BrowsePage.css";
import React, { useState, useEffect } from "react";

const BrowsePage = () => {
  const [dbFurrys, setDbFurrys] = useState([]);

  useEffect(() => {
    // Make an HTTP request to fetch the list of pets
    fetch("/api/furry")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((dbFurrys) => setDbFurrys(dbFurrys))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div className="browse-page">
      <main>
        <section className="browse-title">
          <h1>Welcome to Lost Pet Page</h1>
          <h3>Check the list of pets found or lost</h3>
          <h3>To add, modify, or delete if found, you need to login</h3>
        </section>

        <section className="pet-list">
          <h1>Pet List:</h1>
          <ul>
            {dbFurrys.map((furry) => (
              <li key={furry.id}>
                <strong>Name:</strong> {furry.name}
                <br />
                <strong>Description:</strong> {furry.furryDescription}
                {/* Add more pet information here */}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default BrowsePage;
