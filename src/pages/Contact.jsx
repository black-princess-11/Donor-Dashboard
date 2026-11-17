import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-danger mb-3">Contact Us</h1>
      <p>Have questions? We would love to hear from you.</p>

      <form style={{ maxWidth: "550px" }}>
        <input className="form-control mb-3" placeholder="Your Name" />
        <input className="form-control mb-3" placeholder="Your Email" />
        <textarea className="form-control mb-3" rows="5" placeholder="Your Message" />
        <button className="btn btn-danger">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;