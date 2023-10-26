import React, { useState } from "react";
import axios from "axios";
import "./addFurry.css";

function AddFurry() {
  const [formData, setFormData] = useState({
    name: "",
    furryDescription: "",
    animal: "",
    color: "",
    breed: "",
    particularSign: "",
    lastLocation: "",
    lastDay: "",
    lastTime: "",
    petLost: false,
    petFound: false,
    picture: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to save the form data to the backend
      const response = await axios.post(
        "http://localhost:3001/api/furry",
        formData
      );

      if (response.status === 200) {
        console.log("Furry information submitted successfully!");
        // Clear the form after successful submission
        setFormData({
          name: "",
          furryDescription: "",
          animal: "",
          color: "",
          breed: "",
          particularSign: "",
          lastLocation: "",
          lastDay: "",
          lastTime: "",
          petLost: false,
          petFound: false,
          picture: "",
        });
      }
    } catch (error) {
      console.error("Error submitting furry information:", error);
    }
  };

  return (
    <div className="add-furry-wrapper">
      <h2>Add Furry Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Furry Description:</label>
          <textarea
            name="furryDescription"
            value={formData.furryDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Animal:</label>
          <input
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Particular Sign:</label>
          <input
            type="text"
            name="particularSign"
            value={formData.particularSign}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Last Location:</label>
          <input
            type="text"
            name="lastLocation"
            value={formData.lastLocation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Last Day:</label>
          <input
            type="date"
            name="lastDay"
            value={formData.lastDay}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Last Time:</label>
          <input
            type="time"
            name="lastTime"
            value={formData.lastTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pet Lost:</label>
          <input
            type="checkbox"
            name="petLost"
            checked={formData.petLost}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pet Found:</label>
          <input
            type="checkbox"
            name="petFound"
            checked={formData.petFound}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* <div>
          <label>Picture URL:</label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleInputChange}
          />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFurry;
