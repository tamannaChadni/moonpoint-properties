import React from "react";
import { Helmet } from "react-helmet-async";
const UserProfile = () => {
  return (
    <div className="container mx-auto text-center">
      <Helmet>
        <title>MoonPoint Properties | User Profile</title>
      </Helmet>
      <h1 className="font-bold text-xl text-teal-300"> User Profile</h1>
    </div>
  );
};

export default UserProfile;
