import React from "react";
import { Link } from "react-router-dom";

const DonorHome = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="donor-hero">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-7">

              <span className="badge bg-danger-subtle text-danger mb-3 p-2">
                Together We Can Make A Difference
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Your Donation Can
                <span className="text-danger"> Save Lives</span>
              </h1>

              <p className="lead text-secondary mb-4">
                Every contribution brings hope to someone in need.
                Join our mission and become a reason for someone's smile.
              </p>

              <Link to="/donate" className="btn btn-danger btn-lg me-3">
                Donate Now
              </Link>

              <Link to="/about" className="btn btn-outline-danger btn-lg">
                Learn More
              </Link>

            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
                alt="Charity donation"
                className="img-fluid rounded-4 shadow"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="stat-card">
                <h2 className="text-danger fw-bold">5,000+</h2>
                <p>Donors</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h2 className="text-danger fw-bold">10,000+</h2>
                <p>Lives Impacted</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h2 className="text-danger fw-bold">₹25 Lakhs+</h2>
                <p>Donations Received</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">How You Can Help</h2>
            <p className="text-secondary">
              Choose a cause and make a positive impact.
            </p>
          </div>

          <div className="row g-4">

            {[
              {
                title: "Education Support",
                description: "Help children access quality education."
              },
              {
                title: "Medical Support",
                description: "Support healthcare and medical treatment."
              },
              {
                title: "Food & Shelter",
                description: "Provide food and shelter to needy families."
              }
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div className="card-body text-center">
                    <h4 className="fw-bold mb-3">{item.title}</h4>
                    <p className="text-secondary">{item.description}</p>
                    <Link to="/donate" className="btn btn-outline-danger">
                      Support Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-danger text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Be The Reason Someone Smiles</h2>
          <p className="mb-4">
            Your small contribution can create a big change.
          </p>
          <Link to="/donate" className="btn btn-light btn-lg text-danger">
            Make a Donation
          </Link>
        </div>
      </section>
    </>
  );
};

export default DonorHome;