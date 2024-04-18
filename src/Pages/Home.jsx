import React from "react";
import Properties from "../component/Properties/Properties";
import Banner from "../component/Banner/Banner";
import Newsletter from "../component/Newsletter/Newsletter";
import Statistics from "../component/Statistics/Statistics";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
AOS.init();

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MoonPoint Properties | Home</title>
      </Helmet>
      <Banner></Banner>
      <Properties></Properties>
      <Statistics></Statistics>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
