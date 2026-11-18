
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
// import FindDonors from "./pages/FindDonors";
// import BecomeDonor from "./pages/BecomeDonor";
// import BloodRequests from "./pages/BloodRequests";
import DonationRequest from "./pages/DonationRequest";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import AdminNavbar from "./admin/AdminNavbar";
import BloodStock from "./admin/BloodStock";

// Common Public Layout
function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

// Admin Layout
function AdminLayout() {
  return (
    <>
      <AdminNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* All Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/find-donors" element={<FindDonors />} /> */}
          {/* <Route path="/become-donor" element={<BecomeDonor />} /> */}
          {/* <Route path="/blood-requests" element={<BloodRequests />} /> */}
          <Route path="/donation-request" element={<DonationRequest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="blood-stock" element={<BloodStock />} />
        </Route>

        {/* Default Page */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
