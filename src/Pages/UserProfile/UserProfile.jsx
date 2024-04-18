import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {

  const {user} = useContext(AuthContext);
  return (
    <div className="container mx-auto text-center">
      <Helmet>
        <title>MoonPoint Properties | User Profile</title>
      </Helmet>
      <h1 className="font-bold text-xl text-teal-300"> User Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>

    </div>
  );
};

export default UserProfile;
