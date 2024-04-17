import React from "react";
// import Hero from "../component/Hero/Hero";
import Books from "../component/Books/Books";
import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import Newsletter from "../component/Newsletter/Newsletter";
import Statistics from "../component/Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
      <Statistics></Statistics>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
