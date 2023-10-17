import React from "react";
import Footer from "../../components/Footer/Footer";
import HightLights from "../../components/Higtlights/HightLights";
import Banner from "../../components/HomeBanner/Banner";
import Jakos from "../../components/Jakosx/Jakos";
import Navbar from "../../components/Navbar/Navbar";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Salom from './Product';
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <NavbarTop />
      <Banner />
      <HightLights />
      {/* <Route path="/hightLights/" element={<HightLights />} /> */}

      <Jakos />
      <Footer />
      <Salom />
    </>
  );
};

export default Home;
