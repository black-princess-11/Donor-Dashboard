import React from "react";

const DonationHistory = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-danger mb-4">Donation History</h1>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-danger">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>17 Nov 2026</td>
              <td>Education</td>
              <td>₹1,000</td>
              <td><span className="badge bg-success">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;