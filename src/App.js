import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import Login from "./routes/Login";
import AddPets from "./routes/AddPets";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-pet" element={<AddPets />} />
      </Routes>
    </>
  );
}

export default App;
