
import React from "react";

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="/images/blood.jpg"
              className="img-fluid rounded-4 shadow"
              alt="Blood donation campaign"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="fw-bold">
              About <span className="text-danger">BloodConnect</span>
            </h1>

            <p className="text-secondary mt-3">
              BloodConnect is a blood donor platform designed to connect
              blood donors with patients who need blood.
            </p>

            <p className="text-secondary">
              Our mission is to make blood donor searching easier,
              encourage voluntary blood donation and help save lives.
            </p>

            <h5 className="text-danger">Our Mission</h5>
            <p>Make safe and voluntary blood donation more accessible.</p>

            <h5 className="text-danger">Our Vision</h5>
            <p>A world where no patient suffers due to a shortage of blood.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
