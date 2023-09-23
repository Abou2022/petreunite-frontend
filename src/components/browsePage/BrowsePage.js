import "../browsePage/BrowsePage.css";
import React, { useState, useEffect } from "react";

const BrowsePage = () => {
  const [dbFurrys, setDbFurrys] = useState([]);

  const url = "http://localhost:3001/api/furry";

  // Make an HTTP request to fetch the list of pets
  // useEffect(() => {

  //   fetch("/api/furry")
  //     .then((response) => {
  //       if (!response.ok) {
  //         console.error(`HTTP error! Status: ${response.status}`);
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((dbFurrys) => {
  //       console.log("Received data:", dbFurrys);
  //       setDbFurrys(dbFurrys);
  //     })
  //     .catch((error) => console.error("Error fetching pets:", error));
  // }, []);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setDbFurrys(d));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    // <body className="browse-page-container">
    //   <main className="browse-page">
    //     <section className="browse-title">
    //       <h1>Welcome to Lost Pet Page</h1>
    //       <h3>Check the list of pets found or lost</h3>
    //       <h3>To add, modify, or delete if found, you need to login</h3>
    //     </section>
    //     <section className="pet-list">
    //       <h1>Pet List:</h1>
    //       <ul>
    //         {dbFurrys.map((furry) => (
    //           <li key={furry.id}>
    //             <strong>Name:</strong> {furry.name}
    //             <br />
    //             <strong>Description:</strong> {furry.furryDescription}
    //             <br />
    //             <strong>Animal:</strong> {furry.animal}
    //             <br />
    //             <strong>Major color:</strong> {furry.color}
    //             <br />
    //             <strong>Particluar Sign:</strong> {furry.particularSign}
    //             <br />
    //             <strong>Last location:</strong> {furry.lastLocation}
    //             <br />
    //             <strong>Pet lost:</strong> {furry.petLost}
    //             <br />
    //             <strong>Pet found:</strong> {furry.petFound}
    //             <br />
    //             <strong>Pet Picture:</strong> {furry.picture}
    //             <br />
    //           </li>
    //         ))}
    //       </ul>
    //     </section>
    //   </main>
    // </body>

    //new display check

    <body className="browse-page-container">
      <main className="browse-page">
        <section className="browse-title">
          <h1>Welcome to Lost Pet Page</h1>
          <h3>Check the list of pets found or lost</h3>
          <h3>To add, modify, or delete if found, you need to login</h3>
        </section>
      </main>
      <div className="project-conatiner">
        <div className="project-card">
          {dbFurrys.map((furry) => (
            <div key={furry.id}>
              <img src="" alt="" />
              <h2 className="project-title">Pet Name: {furry.name}</h2>
              <div className="pro-details">
                <p>Pet Description : {furry.furryDescription}</p>
                <p>Animal: {furry.animal}</p>
                <p> Major Color: {furry.color}</p>
                <p>Particular Sign: {furry.particularSign}</p>
                <p>Last Location: {furry.lastLocation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default BrowsePage;
