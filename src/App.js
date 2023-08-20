import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom"


import './App.css';
import Navbar from "./layout/Navbar";
import About from "./page/About";
import Pricing from "./page/Pricing";
import Home from "./page/Home";
import Footer from "./layout/footer";
import Cutting from "./page/Cutting";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/cutting" element={<Cutting />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
