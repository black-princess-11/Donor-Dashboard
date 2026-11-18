
import React, { useState } from "react";

const BecomeDonor = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    bloodGroup: "",
    city: "",
    age: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    const donors = JSON.parse(localStorage.getItem("bloodDonors") || "[]");

    donors.push({
      ...form,
      id: Date.now(),
    });

    localStorage.setItem("bloodDonors", JSON.stringify(donors));

    setMessage("Thank you! Your donor registration was successful.");

    setForm({
      name: "",
      email: "",
      mobile: "",
      bloodGroup: "",
      city: "",
      age: "",
    });
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-4">
          <h1 className="fw-bold">
            Become a <span className="text-danger">Blood Donor</span>
          </h1>
          <p className="text-secondary">
            Register yourself and help save someone's life.
          </p>
        </div>

        <div className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "700px" }}>

          {message && (
            <div className="alert alert-info">{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="Enter email"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  maxLength="10"
                  required
                  value={form.mobile}
                  onChange={e => setForm({...form, mobile: e.target.value})}
                  placeholder="10-digit mobile number"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select"
                  required
                  value={form.bloodGroup}
                  onChange={e => setForm({...form, bloodGroup: e.target.value})}
                >
                  <option value="">Select Blood Group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  min="18"
                  max="65"
                  required
                  value={form.age}
                  onChange={e => setForm({...form, age: e.target.value})}
                  placeholder="Enter your age"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  className="form-control"
                  required
                  value={form.city}
                  onChange={e => setForm({...form, city: e.target.value})}
                  placeholder="Enter your city"
                />
              </div>

              <div className="col-12">
                <button className="btn btn-danger w-100 py-2">
                  Register as Blood Donor
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomeDonor;
