import "@mantine/core/styles.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loading from "./components/Loading/Loading";
import ProductByCategory from "./components/product/productByCategry";

const NotFound = lazy(() => import("./components/404/NotFound"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const HightLightsId = lazy(() =>
  import("./components/Higtlights/HigtlightsId")
);
const NavbarTop = lazy(() => import("./components/NavbarTop/NavbarTop"));
const News = lazy(() => import("./components/News/News"));
const Offer = lazy(() => import("./components/Offer/Offer"));
const OfferId = lazy(() => import("./components/Offer/OfferId"));
const Wishes = lazy(() => import("./components/Wishes/Wishes"));
const WishesId = lazy(() => import("./components/Wishes/WishesId"));
const Order = lazy(() => import("./components/order/Order"));
const Home = lazy(() => import("./pages/Home/Home"));
const Mens = lazy(() => import("./pages/mens/Mens"));
const Sale = lazy(() => import("./pages/sale/Sale"));
const Women = lazy(() => import("./pages/women/Women"));

const loadingMessage = (
  <div className="mx-auto">
    <Loading />
  </div>
);
function App() {
  return (
    <div>
      <Suspense fallback={loadingMessage}>
        <BrowserRouter>
          <ToastContainer />
          <NavbarTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/higtlightsId/:slug" element={<HightLightsId />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/women" element={<Women />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offer/" element={<Offer />} />
            <Route path="/offer/:slug" element={<OfferId />} />
            <Route path="/products/:category" element={<ProductByCategory />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/wishesId:slug" element={<WishesId />} />
            <Route path="/order" element={<Order />} />
            <Route path="/news" element={<News />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
          <productByCategry />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
export default App;
