
import React from "react";
import {
  showSuccess,
  showError,
} from "../components/Notification";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      showSuccess("Thank you for contacting BloodConnect!");
      e.target.reset();
    } catch (error) {
      showError("Unable to send your message. Please try again.");
    }
  };

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

        <div
          className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "650px" }}
        >

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-danger w-100"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
