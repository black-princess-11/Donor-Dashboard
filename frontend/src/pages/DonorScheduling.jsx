
import React, { useState } from "react";
import { showSuccess, showError } from "../components/Notification";

const DonorScheduling = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    date: "",
    time: "",
    hospital: "",
    city: "",
    message: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      showError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const appointments =
      JSON.parse(localStorage.getItem("donorAppointments")) || [];

    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);

    localStorage.setItem(
      "donorAppointments",
      JSON.stringify(appointments)
    );

    showSuccess("Donation appointment submitted successfully!");

    setFormData({
      donorName: "",
      mobile: "",
      email: "",
      bloodGroup: "",
      date: "",
      time: "",
      hospital: "",
      city: "",
      message: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
          DONOR APPOINTMENT
        </span>
        <h2 className="fw-bold">
          Schedule Your <span className="text-danger">Blood Donation</span>
        </h2>
        <p className="text-muted">
          Choose your preferred date and location to donate blood.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card border-0 shadow p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <h5 className="fw-bold text-danger mb-4">
                <i className="bi bi-person-fill me-2"></i>
                Donor Information
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Donor Name *</label>
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

                <div className="col-md-6">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter 10 digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Blood Group *</label>
                  <select
                    name="bloodGroup"
                    className="form-select"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Blood Group</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                      (group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold text-danger mb-4">
                <i className="bi bi-calendar-check me-2"></i>
                Appointment Details
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Preferred Time *</label>
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Blood Bank / Hospital *</label>
                  <input
                    type="text"
                    name="hospital"
                    className="form-control"
                    placeholder="Enter hospital or blood bank"
                    value={formData.hospital}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City *</label>
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

                <div className="col-12">
                  <label className="form-label">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Any additional information..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="alert alert-info mt-4">
                <i className="bi bi-info-circle-fill me-2"></i>
                Your appointment is subject to confirmation and medical
                eligibility screening by the blood bank.
              </div>

              <button type="submit" className="btn btn-danger w-100 py-3 fw-bold">
                <i className="bi bi-calendar-check me-2"></i>
                Schedule Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorScheduling;
