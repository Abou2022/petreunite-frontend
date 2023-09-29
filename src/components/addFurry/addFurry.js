import React, { useState } from "react";
import axios from "axios";
import "./addFurry.css";

function AddFurry() {
  // State to store form input values
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
      }
    } catch (error) {
      console.error("Error submitting furry information:", error);
      // Handle the error, display an error message, or perform other actions
    }
  };

  return (
    <div className="add-furry-wrapper">
      <h2>Add Furry Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for furry information */}
        {/* Example: */}
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

        {/* Add more input fields for other furry information */}
        {/* Example: */}
        <div>
          <label>Furry Description:</label>
          <textarea
            name="furryDescription"
            value={formData.furryDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Add other input fields for the remaining furry details */}
        {/* ...

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFurry;
