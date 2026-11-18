
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const bloodGroups = [
    "A+", "A-", "B+", "B-",
    "AB+", "AB-", "O+", "O-"
  ];

  return (
    <>
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="blood-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <span className="hero-badge">
                Every Drop Counts
              </span>

              <h1 className="display-3 fw-bold mt-3">
                Donate Blood,
                <span className="text-danger"> Save Lives.</span>
              </h1>

              <p className="lead text-secondary my-4">
                Your one donation can save up to three lives.
                Join our community of blood donors and help people
                in their most critical moments.
              </p>

              <Link
                to="/become-donor"
                className="btn btn-danger btn-lg me-3 mb-2"
              >
                Become a Donor
              </Link>

              <Link
                to="/find-donors"
                className="btn btn-outline-danger btn-lg mb-2"
              >
                Find Blood Donors
              </Link>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src="/images/hblood.jpg"
                alt="Blood donation"
                className="img-fluid hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">

            {[
              { number: "1,500+", title: "Registered Donors" },
              { number: "2,000+", title: "Lives Saved" },
              { number: "500+", title: "Blood Requests" },
              { number: "8", title: "Blood Groups" }
            ].map((item, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="stat-card">
                  <h2 className="text-danger fw-bold">
                    {item.number}
                  </h2>
                  <p className="mb-0 text-secondary">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BLOOD GROUPS */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Find Blood Donors by Group
            </h2>
            <p className="text-secondary">
              Select your required blood group to find matching donors.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {bloodGroups.map((group) => (
              <div className="col-6 col-md-3" key={group}>
                <Link
                  to={`/find-donors?group=${encodeURIComponent(group)}`}
                  className="blood-group-card"
                >
                  <div className="blood-drop">🩸</div>
                  <h3>{group}</h3>
                  <span>Find Donors</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">How BloodConnect Works</h2>
            <p className="text-secondary">
              Three simple steps to help save a life.
            </p>
          </div>

          <div className="row g-4 text-center">

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">01</div>
                <h4>Register as Donor</h4>
                <p>Share your details and blood group.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">02</div>
                <h4>Find Blood Donors</h4>
                <p>Search donors according to blood group and location.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">03</div>
                <h4>Save Lives</h4>
                <p>Connect with donors and help patients in need.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMERGENCY SECTION */}
      <section className="emergency-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">
            Someone Needs Blood. Be Their Hero!
          </h2>

          <p className="my-3">
            Your timely contribution can make a life-saving difference.
          </p>

          <Link to="/blood-requests" className="btn btn-light btn-lg me-2">
            View Blood Requests
          </Link>

          <Link to="/become-donor" className="btn btn-outline-light btn-lg">
            Become a Donor
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
