
import React, { useState } from "react";
import {
  showSuccess,
  showError,
} from "../components/Notification";

const DonationRequest = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    units: "1",
    city: "",
    hospital: "",
    availableDate: "",
    message: "",
  });

  const [requests, setRequests] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("donationRequests") || "[]"
      );
    } catch {
      return [];
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      showError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (Number(formData.units) < 1) {
      showError("Please enter at least 1 unit.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      createdAt: new Date().toLocaleDateString(),
    };

    const updatedRequests = [newRequest, ...requests];

    try {
      localStorage.setItem(
        "donationRequests",
        JSON.stringify(updatedRequests)
      );

      setRequests(updatedRequests);

      showSuccess(
        "Your donation request has been submitted successfully!"
      );

      setFormData({
        donorName: "",
        mobile: "",
        email: "",
        bloodGroup: "",
        units: "1",
        city: "",
        hospital: "",
        availableDate: "",
        message: "",
      });
    } catch {
      showError("Unable to submit request. Please try again.");
    }
  };

  return (
    <div className="donation-request-page">

      {/* Page Header */}
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Donation Request</h1>
          <p className="mb-0">
            Your one donation can help save someone's life.
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">

                <div className="text-center mb-4">
                  <div className="display-5 mb-2">🩸</div>
                  <h3 className="fw-bold">Donor Information</h3>
                  <p className="text-muted">
                    Fill in your details to submit your donation request.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    {/* Donor Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Donor Full Name *
                      </label>
                      <input
                        type="text"
                        name="donorName"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.donorName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Mobile */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Blood Group */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Blood Group *
                      </label>
                      <select
                        name="bloodGroup"
                        className="form-select"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>

                    {/* Units */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Donation Units *
                      </label>
                      <input
                        type="number"
                        name="units"
                        className="form-control"
                        min="1"
                        max="1"
                        value={formData.units}
                        onChange={handleChange}
                        required
                      />
                      <small className="text-muted">
                        Actual donation amount will be decided by medical staff.
                      </small>
                    </div>

                    {/* City */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Hospital */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Preferred Hospital / Blood Bank
                      </label>
                      <input
                        type="text"
                        name="hospital"
                        className="form-control"
                        placeholder="Enter hospital name"
                        value={formData.hospital}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Available Date */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Available Donation Date *
                      </label>
                      <input
                        type="date"
                        name="availableDate"
                        className="form-control"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.availableDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Enter any additional information..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-danger btn-lg w-100"
                      >
                        <i className="bi bi-heart-fill me-2"></i>
                        Submit Donation Request
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DonationRequest;
