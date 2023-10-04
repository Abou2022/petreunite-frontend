import React from "react";
import UserInfoPageNavbar from "../components/userInfoPageNavbar";
import Footer from "../components/footer/Footer";
import UserInfoPage from "../components/UserInfoPage/UserInfoPage";

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
