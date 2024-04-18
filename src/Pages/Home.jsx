import React from "react";
import Books from "../component/Properties/Properties";
import Banner from "../component/Banner/Banner";
import Newsletter from "../component/Newsletter/Newsletter";
import Statistics from "../component/Statistics/Statistics";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MoonPoint Properties | Home</title>
      </Helmet>
      <Banner></Banner>
      <Books></Books>
      <Statistics></Statistics>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
