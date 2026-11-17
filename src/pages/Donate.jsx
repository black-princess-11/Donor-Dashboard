import React from "react";

const Donate = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-danger mb-4">Make a Donation</h1>

      <div className="card shadow-sm border-0 p-4 mx-auto" style={{ maxWidth: "550px" }}>
        <form>
          <div className="mb-3">
            <label className="form-label">Donor Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Donation Amount (₹)</label>
            <input type="number" min="1" className="form-control" placeholder="Enter amount" />
          </div>

          <div className="mb-3">
            <label className="form-label">Donation Purpose</label>
            <select className="form-select">
              <option>Education</option>
              <option>Medical Support</option>
              <option>Food & Shelter</option>
            </select>
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;