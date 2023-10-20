import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUser } from "./useUser";

// export const PrivateRoute = ({ element: Element, ...rest }) => {
//   const userToken = localStorage.getItem("userToken");

//   if (!userToken) {
//     return <Navigate to="/login" />;
//   }
//   return <Route {...rest} element={<Element />} />;
// };
// export default PrivateRoute;
export const PrivateRoute = (props) => {
  const user = useUser();

  if (!user) return <Navigate to="/login" />;

  return <Route {...props} />;
};
