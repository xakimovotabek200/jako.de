
import Jakos from "../../components/Jakosx/Jakos";

import React from 'react';
import HightLights from "../../components/Higtlights/HightLights";
import Banner from '../../components/HomeBanner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import NavbarTop from '../../components/NavbarTop/NavbarTop';
import Demo from "../../components/Higtlights/CardSlider";


const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarTop />
      <Banner />
      <HightLights />
      <Demo/>
      <Jakos />
    </div>
  );
};

export default Home;
