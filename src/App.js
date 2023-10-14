import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import '@mantine/core/styles.css';
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Kids from './components/Kids/Kids'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<Kids/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
