import React from "react";
import UserInfoPageNavbar from "../components/userInfoPageNavbar/UserInfoPageNavbar";
import Footer from "../components/footer/Footer";
import UserInfoPage from "../components/userInfoPage/UserInfoPage";

const UserInfo = () => {
  return (
    <div>
      <UserInfoPageNavbar />
      <UserInfoPage />
      <Footer />
    </div>
  );
};

export default UserInfo;
