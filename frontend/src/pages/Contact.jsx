
import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Contact <span className="text-danger">Us</span>
          </h1>
          <p className="text-secondary">
            Get in touch with our BloodConnect team.
          </p>
        </div>

        <div className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "650px" }}>

          <form onSubmit={e => {
            e.preventDefault();
            alert("Thank you for contacting BloodConnect!");
            e.target.reset();
          }}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input className="form-control" required placeholder="Your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required placeholder="Your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input className="form-control" required placeholder="Subject" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" required placeholder="Your message" />
            </div>

            <button className="btn btn-danger w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
