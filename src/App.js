import "@mantine/core/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Kids from "./components/Kids/Kids";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Home from "./pages/Home/Home";
import Mens from "./pages/mens/Mens";
import Sale from "./pages/sale/Sale";
import Equitment from "./components/Equitment/Equitment";
import "@mantine/core/styles.css";
import Cart from "./components/Cart/Cart";
import HightLightsId from "./components/Higtlights/HigtlightsId";
import Women from "./pages/women/Women";
import Offer from "./components/Offer/Offer";
import Wishes from "./components/Wishes/Wishes";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/higtlightsId/:id" element={<HightLightsId />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/equitment" element={<Equitment />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
