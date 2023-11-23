import React from "react";
import "../userInfoPage/UserInfoPage.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const UserInfoPage = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useToken();

  useEffect(() => {
    // Check if the user has a valid token
    if (!token) {
      setErrorMessage("You are not authenticated. Please log in.");
    } else {
      // Make an API request to fetch user data, including their pets
      axios
        .get("http://localhost:3001/api/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setErrorMessage("Authentication failed. Please log in.");
          } else {
            setErrorMessage("An error occurred while fetching your data.");
          }
        });
    }
  }, [token]);

  return (
    <div className="user-info-container">
      <div className="user-info-content">
        <h1>User Info</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        {user && (
          <div>
            <h2>
              Welcome, {user.firstName} {user.lastName}!
            </h2>
            <h3>Your Registered Pets:</h3>
            <ul>
              {user.pets.map((pet) => (
                <li key={pet.id}>{pet.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <div className="user-info-footer">
        <!-- Your footer content goes here -->
        &copy; 2023 PetReunite. All rights reserved.
      </div> */}
    </div>
  );
};

export default UserInfoPage;
