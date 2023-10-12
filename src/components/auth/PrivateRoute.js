// import React from "react";
// import { Navigate, Route } from "react-router-dom";

// export const PrivateRoute = (props) => {
//   const user = null;

//   if (!user) return <Navigate to="/login" />;
//   return <Route {...props} />;
// };
// export default PrivateRoute;

// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ element: Element, ...rest }) => {
  const userToken = localStorage.getItem("userToken"); // Assuming you store the token in local storage

  // Check if the token exists and is valid (you should validate it)
  if (!userToken) {
    // Token doesn't exist, so the user is not authenticated
    return <Navigate to="/login" />;
  }

  // If the token is valid, render the protected route
  return <Route {...rest} element={<Element />} />;
};
export default PrivateRoute;
