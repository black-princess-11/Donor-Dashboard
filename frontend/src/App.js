
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

// Public Pages
import Home from "./pages/Home";
import DonationRequest from "./pages/DonationRequest";
import DonorScheduling from "./pages/DonorScheduling";
import PatientBloodRequest from "./pages/PatientBloodRequest";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BecomeDonor from "./pages/BecomeDonor";

// Admin Components
import AdminNavbar from "./admin/AdminNavbar";
import BloodStock from "./admin/BloodStock";

function App() {
  return (
    <BrowserRouter>
      <Notification />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Become Donor */}
        <Route
          path="/become-donor"
          element={
            <>
              <Navbar />
              <BecomeDonor />
              <Footer />
            </>
          }
        />

        {/* Donation Request */}
        <Route
          path="/donation-request"
          element={
            <>
              <Navbar />
              <DonationRequest />
              <Footer />
            </>
          }
        />

        {/* Donor Scheduling */}
        <Route
          path="/donor-scheduling"
          element={
            <>
              <Navbar />
              <DonorScheduling />
              <Footer />
            </>
          }
        />

        {/* Patient Blood Request */}
        <Route
          path="/patient-blood-request"
          element={
            <>
              <Navbar />
              <PatientBloodRequest />
              <Footer />
            </>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Admin Blood Stock */}
        <Route
          path="/admin/blood-stock"
          element={
            <>
              <AdminNavbar />
              <BloodStock />
              <Footer />
            </>
          }
        />

        {/* Default Route */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
