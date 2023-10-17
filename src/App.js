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

import "@mantine/core/styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
