
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="blood-footer">
      <div className="container py-5">
        <div className="row g-4">

          <div className="col-md-5">
            <h3 className="fw-bold text-white">BloodConnect</h3>
            <p>
              Connecting blood donors with people in need.
              Every donation brings hope and saves lives.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/find-donors">Find Donors</Link></li>
              <li><Link to="/become-donor">Become a Donor</Link></li>
              <li><Link to="/blood-requests">Blood Requests</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@bloodconnect.com</p>
            <p>Helping people through blood donation.</p>
          </div>

        </div>

        <hr className="border-light" />

        <p className="text-center mb-0">
          © 2026 BloodConnect. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
