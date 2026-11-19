
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold text-danger fs-3">
          <span className="me-2">🩸</span>BloodConnect
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            {/* Find Donors */}
            {/* <li className="nav-item">
              <NavLink to="/find-donors" className="nav-link">
                Find Donors
              </NavLink>
            </li> */}

            {/* Become a Donor */}
            {/* <li className="nav-item">
              <NavLink to="/become-donor" className="nav-link">
                Become a Donor
              </NavLink>
            </li> */}

            {/* Donation Request */}
            <li className="nav-item">
              <NavLink to="/donation-request" className="nav-link">
                Donation Request
              </NavLink>
            </li>

            {/* Donor Blood Scheduling */}
            <li className="nav-item">
              <NavLink to="/donor-scheduling" className="nav-link">
                Donor Scheduling
              </NavLink>
            </li>

            {/* Patient Blood Request */}
            <li className="nav-item">
              <NavLink to="/patient-blood-request" className="nav-link">
                Request Blood
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            {/* Profile */}
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>

            {/* Donate Blood Button */}
            <li className="nav-item">
              <Link to="/become-donor" className="btn btn-danger px-4">
                Donate Blood
              </Link>
            </li>

            {/* Admin Button */}
            <li className="nav-item">
              <Link
                to="/admin/blood-stock"
                className="btn btn-outline-danger px-4"
              >
                <i className="bi bi-shield-lock-fill me-2"></i>
                Admin
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
