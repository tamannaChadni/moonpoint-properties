import React from "react";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  return (
    <div className="container mx-auto text-center">
      <Helmet>
        <title>MoonPoint Properties | Home</title>
      </Helmet>
      <h1 className="font-bold text-xl text-teal-300"> Update User Profile</h1>
    </div>
  );
};

export default UpdateProfile;
