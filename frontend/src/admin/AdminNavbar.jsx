
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link px-3 py-2 ${
      isActive ? "active fw-bold text-danger" : "text-dark"
    }`;

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid px-3 px-lg-4">

        {/* Logo */}
        <NavLink
          to="/admin"
          className="navbar-brand fw-bold text-danger fs-4"
        >
          🩸 BloodConnect
          <span className="badge bg-danger ms-2" style={{ fontSize: "10px" }}>
            ADMIN
          </span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* <li className="nav-item">
              <NavLink
                to="/admin"
                end
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-grid-fill me-2"></i>
                Dashboard
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/admin/blood-stock"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-droplet-fill me-2"></i>
                Blood Stock
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="/admin/blood-requests"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-heart-pulse-fill me-2"></i>
                Blood Requests
              </NavLink>
            </li> */}

            {/* <li className="nav-item">
              <NavLink
                to="/admin/donor-requests"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-person-plus-fill me-2"></i>
                Donor Requests
              </NavLink>
            </li> */}

            {/* <li className="nav-item">
              <NavLink
                to="/admin/donors"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-people-fill me-2"></i>
                Donors
              </NavLink>
            </li> */}

            <li className="nav-item ms-lg-2">
              <NavLink
                to="/"
                className="btn btn-danger px-3 mt-2 mt-lg-0"
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-box-arrow-left me-2"></i>
                Back to Website
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
