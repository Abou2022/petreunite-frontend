import "../browsePage/BrowsePage.css";
import React, { useState, useEffect } from "react";

const BrowsePage = () => {
  const [furryList, setFurryList] = useState([]);

  useEffect(() => {
    // Make an HTTP request to fetch the list of pets
    fetch("/api/furry")
      .then((response) => response.json())
      .then((furryList) => setFurryList(furryList))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <body className="browse-page">
      <main>
        <div className="browse-title">
          <h1>Welcome to Lost Pet page</h1>
          <h3>Check the list of pet found or lost</h3>
          <h3>To add, modify or delete if found, you need to login</h3>
        </div>

        <div className="pet-list">
          <h2>Pet List:</h2>
          <ul>
            {furryList.map((furry) => (
              <li key={furry.id}>
                <strong>Name:</strong> {furry.name}
                <br />
                <strong>Description:</strong> {furry.furryDescription}
                {/* Add more pet information here */}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </body>
  );
};

export default BrowsePage;
