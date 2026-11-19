
import React, { useState } from "react";
import { showSuccess, showError } from "../components/Notification";

const PatientBloodRequest = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    units: "1",
    requiredDate: "",
    hospital: "",
    city: "",
    urgency: "Normal",
    reason: "",
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

    const requests =
      JSON.parse(localStorage.getItem("patientBloodRequests")) || [];

    const newRequest = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    requests.push(newRequest);

    localStorage.setItem(
      "patientBloodRequests",
      JSON.stringify(requests)
    );

    showSuccess("Blood request submitted successfully!");

    setFormData({
      patientName: "",
      mobile: "",
      email: "",
      bloodGroup: "",
      units: "1",
      requiredDate: "",
      hospital: "",
      city: "",
      urgency: "Normal",
      reason: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
          PATIENT BLOOD REQUEST
        </span>

        <h2 className="fw-bold">
          Request <span className="text-danger">Blood</span>
        </h2>

        <p className="text-muted">
          Submit your blood requirement and provide the necessary details.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card border-0 shadow p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <h5 className="fw-bold text-danger mb-4">
                <i className="bi bi-person-fill me-2"></i>
                Patient Information
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Patient Name *</label>
                  <input
                    type="text"
                    name="patientName"
                    className="form-control"
                    placeholder="Enter patient name"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Contact Number *</label>
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
                    placeholder="Enter email address"
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

                <div className="col-md-6">
                  <label className="form-label">Required Units *</label>
                  <input
                    type="number"
                    name="units"
                    className="form-control"
                    min="1"
                    max="20"
                    value={formData.units}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Required Date *</label>
                  <input
                    type="date"
                    name="requiredDate"
                    className="form-control"
                    min={today}
                    value={formData.requiredDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold text-danger mb-4">
                <i className="bi bi-hospital me-2"></i>
                Hospital & Request Details
              </h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Hospital Name *</label>
                  <input
                    type="text"
                    name="hospital"
                    className="form-control"
                    placeholder="Enter hospital name"
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
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Urgency *</label>
                  <select
                    name="urgency"
                    className="form-select"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                  >
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Reason / Additional Details</label>
                  <textarea
                    name="reason"
                    className="form-control"
                    rows="4"
                    placeholder="Enter additional information..."
                    value={formData.reason}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="alert alert-warning mt-4">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Submitting a request does not guarantee blood availability.
                Please contact the hospital or blood bank directly for urgent
                medical needs.
              </div>

              <button type="submit" className="btn btn-danger w-100 py-3 fw-bold">
                <i className="bi bi-send-fill me-2"></i>
                Submit Blood Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientBloodRequest;
