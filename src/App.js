import "@mantine/core/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NotFound from "./components/404/NotFound";
import Cart from "./components/Cart/Cart";
import Equitment from "./components/Equitment/Equitment";
import Footer from "./components/Footer/Footer";
import HightLightsId from "./components/Higtlights/HigtlightsId";
import Kids from "./components/Kids/Kids";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import News from "./components/News/News";
import Offer from "./components/Offer/Offer";
import OfferId from "./components/Offer/OfferId";
import Wishes from "./components/Wishes/Wishes";
import Order from "./components/order/Order";
import Home from "./pages/Home/Home";
import Mens from "./pages/mens/Mens";
import Sale from "./pages/sale/Sale";
import Women from "./pages/women/Women";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/higtlightsId/:slug" element={<HightLightsId />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offer/" element={<Offer />} />
        <Route path="/offer/:slug" element={<OfferId />} />
        <Route path="/equitment" element={<Equitment />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/order" element={<Order />} />
        <Route path="/news" element={<News />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
