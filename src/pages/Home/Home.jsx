
import Jakos from "../../components/Jakosx/Jakos";

import React from 'react';
import HightLights from "../../components/Higtlights/HightLights";
import Banner from '../../components/HomeBanner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import NavbarTop from '../../components/NavbarTop/NavbarTop';


const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarTop />
      <Banner />
      <HightLights />
      <Jakos />
    </div>
  );
};

export default Home;
