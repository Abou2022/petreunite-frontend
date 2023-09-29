import "../browsePage/BrowsePage.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import Axios

const BrowsePage = () => {
  const [dbFurrys, setDbFurrys] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const url = "http://localhost:3001/api/furry";

  const fetchData = () => {
    return axios.get(url).then((res) => {
      setDbFurrys(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle navigation to the AddFurry component
  const handleAddFurryClick = () => {
    // Use the navigate function to navigate to the AddFurry route
    navigate("/addfurry");
  };

  return (
    <div className="browse-page-container">
      <main className="browse-page">
        <section className="browse-title">
          <h1>Welcome to Lost Pet Page</h1>
          <h3>Check the list of pets found or lost</h3>
          <h3>To add, modify, or delete if found, you need to login</h3>
          {/* Add a button to navigate to AddFurry */}
          <button onClick={handleAddFurryClick}>Add Furry</button>
        </section>
      </main>
      <div className="project-container">
        {dbFurrys.map((furry) => (
          <div className="project-card" key={furry.id}>
            <img src="" alt="" />
            <h2 className="project-title">Pet Name: {furry.name}</h2>
            <div className="pro-details">
              <p>Pet Description: {furry.furryDescription}</p>
              <p>Animal: {furry.animal}</p>
              <p>Major Color: {furry.color}</p>
              <p>Particular Sign: {furry.particularSign}</p>
              <p>Last Location: {furry.lastLocation}</p>
              <p>Last Day: {furry.lastDay}</p>
              <p>Last Time: {furry.lastTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
