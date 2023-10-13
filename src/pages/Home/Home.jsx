import Jakos from "../../components/Jakosx/Jakos";

import React from "react";
import HightLights from "../../components/Higtlights/HightLights";
import Banner from "../../components/HomeBanner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Footer from "../../components/Footer/Footer";
import Mens from "../mens/Mens";

const Home = () => {
  return (
    <>
      <Navbar />
      <NavbarTop />
      <Banner />
      <HightLights />
      <Jakos />
      <Footer />
    </>
  );
};

export default Home;
