import React from "react";
import HightLights from "../../components/Higtlights/HightLights";
import Banner from "../../components/HomeBanner/Banner";
import Jakos from "../../components/Jakosx/Jakos";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <>
      <Banner />
      <HightLights />
      <Jakos />
    </>
  );
};

export default Home;
