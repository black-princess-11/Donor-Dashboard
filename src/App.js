import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import DonorHome from "./pages/DonorHome";
import About from "./pages/About";
import Donate from "./pages/Donate";
import DonationHistory from "./pages/DonationHistory";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<DonorHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/history" element={<DonationHistory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;