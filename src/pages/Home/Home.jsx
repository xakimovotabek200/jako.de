import React from "react";
import Footer from "../../components/Footer/Footer";
import HightLights from "../../components/Higtlights/HightLights";
import Banner from "../../components/HomeBanner/Banner";
import Jakos from "../../components/Jakosx/Jakos";
import Navbar from "../../components/Navbar/Navbar";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <>
      <Banner />
      <HightLights />
      <Jakos />
      <Shop/>
    </>
  );
};

export default Home;
