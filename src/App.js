import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";

import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HightLightsId from "./components/Higtlights/HigtlightsId";
import HightLights from "./components/Higtlights/HightLights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/higtlightsId/:id" element={<HightLightsId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
