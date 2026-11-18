
import React, { useState } from "react";

const defaultProfile = {
  name: "Rahul Patel",
  email: "rahul@gmail.com",
  mobile: "9876543210",
  city: "Rajkot",
  bloodGroup: "O+",
  age: "25",
  gender: "Male",
  lastDonation: "15 August 2026",
};

const Profile = () => {
  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem("donorProfile")) || defaultProfile;
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem("donorProfile", JSON.stringify(profile));
    setEditing(false);
    setMessage("Profile updated successfully!");
  };

  return (
    <section className="py-5 profile-section">
      <div className="container">

        <div className="mb-4">
          <h2 className="fw-bold">
            <span className="text-danger">Profile</span>
          </h2>
          <p className="text-secondary">
            Manage your personal and blood donation information.
          </p>
        </div>

        {message && (
          <div className="alert alert-success">{message}</div>
        )}

        <div className="row g-4">

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 text-center">
              <div className="profile-avatar">
                {profile.name.charAt(0).toUpperCase()}
              </div>

              <h4 className="fw-bold mt-3">{profile.name}</h4>
              <p className="text-secondary">{profile.email}</p>

              <span className="blood-label mx-auto mb-3">
                {profile.bloodGroup}
              </span>

              <hr />

              <div className="d-flex justify-content-between">
                <span>City</span>
                <strong>{profile.city}</strong>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <span>Last Donation</span>
                <strong>{profile.lastDonation}</strong>
              </div>

              <button
                className="btn btn-danger mt-4"
                onClick={() => {
                  setEditing(!editing);
                  setMessage("");
                }}
              >
                {editing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4">

              <h4 className="fw-bold mb-4">Personal Information</h4>

              <form onSubmit={handleSave}>
                <div className="row g-3">

                  {[
                    { label: "Full Name", name: "name" },
                    { label: "Email Address", name: "email" },
                    { label: "Mobile Number", name: "mobile" },
                    { label: "City", name: "city" },
                    { label: "Age", name: "age" },
                    { label: "Gender", name: "gender" },
                  ].map((field) => (
                    <div className="col-md-6" key={field.name}>
                      <label className="form-label fw-semibold">
                        {field.label}
                      </label>
                      <input
                        className="form-control"
                        name={field.name}
                        value={profile[field.name]}
                        onChange={handleChange}
                        readOnly={!editing}
                        required
                      />
                    </div>
                  ))}

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Blood Group
                    </label>
                    <select
                      className="form-select"
                      name="bloodGroup"
                      value={profile.bloodGroup}
                      onChange={handleChange}
                      disabled={!editing}
                    >
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Last Donation Date
                    </label>
                    <input
                      className="form-control"
                      name="lastDonation"
                      value={profile.lastDonation}
                      onChange={handleChange}
                      readOnly={!editing}
                    />
                  </div>

                </div>

                {editing && (
                  <button className="btn btn-danger mt-4" type="submit">
                    Save Changes
                  </button>
                )}
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
