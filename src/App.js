// import React from "react";
// import "./index.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "./routes/Home";
// import Browse from "./routes/Browse";
// import Login from "./routes/Login";
// import AddPets from "./routes/AddPets";
// import SignUp from "./routes/SignUp";
// import PrivateRoute from "./components/auth/PrivateRoute";
// import UserInfo from "./routes/UserInfo";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/browse" element={<Browse />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/add-pet" element={<AddPets />} />
//         {/* <PrivateRoute path="/userInfo" element={<UserInfo />} />
//           <Route path="/userInfo" element={<PrivateRoute />} /> */}
//         <Route path="/userInfo" element={<PrivateRoute />}>
//           <Route path="/userInfo" element={<UserInfo />} />
//           {/* <Route path="/userInfo" element={<PrivateRoute />} /> */}
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Browse from "./routes/Browse";
import Login from "./routes/Login";
import AddPets from "./routes/AddPets";
import SignUp from "./routes/SignUp";
// import PrivateRoute from "./components/auth/PrivateRoute";
import UserInfo from "./routes/UserInfo";
import AboutMe from "./routes/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/add-pet" element={<AddPets />} />
      {/* Use the PrivateRoute to protect the /userInfo route */}
      {/* <PrivateRoute path="/userInfo" element={<UserInfo />} /> */}
      <Route path="/userInfo" element={<UserInfo />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
