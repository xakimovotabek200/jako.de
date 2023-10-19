import "@mantine/core/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Kids from "./components/Kids/Kids";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Home from "./pages/Home/Home";
import Sale from "./pages/sale/Sale";
import Mens from "./pages/mens/Mens"

import "@mantine/core/styles.css";
import HightLightsId from "./components/Higtlights/HigtlightsId";
import Women from "./pages/women/Women";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/higtlightsId/:id" element={<HightLightsId />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
