import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import Login from "./routes/Login";
import AddPets from "./routes/AddPets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-furry" element={<AddPets />} />
      </Routes>
    </>
  );
}

export default App;
