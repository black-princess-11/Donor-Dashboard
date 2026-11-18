
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const sampleDonors = [
  { id: 1, name: "Rahul Patel", group: "A+", city: "Rajkot", mobile: "9876543210" },
  { id: 2, name: "Priya Shah", group: "B+", city: "Ahmedabad", mobile: "9876543211" },
  { id: 3, name: "Amit Joshi", group: "O+", city: "Rajkot", mobile: "9876543212" },
  { id: 4, name: "Neha Mehta", group: "AB+", city: "Surat", mobile: "9876543213" },
  { id: 5, name: "Karan Desai", group: "O-", city: "Vadodara", mobile: "9876543214" },
  { id: 6, name: "Riya Parmar", group: "A-", city: "Rajkot", mobile: "9876543215" }
];

const FindDonors = () => {
  const [searchParams] = useSearchParams();

  const [group, setGroup] = useState(searchParams.get("group") || "");
  const [city, setCity] = useState("");

  const filteredDonors = sampleDonors.filter((donor) => {
    return (
      (!group || donor.group === group) &&
      (!city || donor.city.toLowerCase().includes(city.toLowerCase()))
    );
  });

  return (
    <section className="py-5 donor-search">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Find Blood <span className="text-danger">Donors</span>
          </h1>
          <p className="text-secondary">
            Search for blood donors near your location.
          </p>
        </div>

        <div className="card border-0 shadow-sm p-4 mb-4">
          <div className="row g-3">

            <div className="col-md-5">
              <label className="form-label fw-semibold">Blood Group</label>
              <select
                className="form-select"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="">All Blood Groups</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="col-md-5">
              <label className="form-label fw-semibold">City</label>
              <input
                className="form-control"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="col-md-2 d-flex align-items-end">
              <button
                className="btn btn-danger w-100"
                onClick={() => {
                  setGroup("");
                  setCity("");
                }}
              >
                Clear
              </button>
            </div>

          </div>
        </div>

        <h5 className="mb-3">
          Available Donors: {filteredDonors.length}
        </h5>

        <div className="row g-4">
          {filteredDonors.map((donor) => (
            <div className="col-md-6 col-lg-4" key={donor.id}>
              <div className="card donor-card border-0 shadow-sm h-100 p-3">
                <div className="card-body">

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold">{donor.name}</h5>
                    <span className="blood-label">{donor.group}</span>
                  </div>

                  <p className="text-secondary">
                    <strong>Location:</strong> {donor.city}
                  </p>

                  <p className="text-secondary">
                    <strong>Contact:</strong> {donor.mobile}
                  </p>

                  <a
                    href={`tel:${donor.mobile}`}
                    className="btn btn-outline-danger w-100"
                  >
                    Contact Donor
                  </a>

                </div>
              </div>
            </div>
          ))}

          {filteredDonors.length === 0 && (
            <div className="col-12 text-center py-5">
              <h5>No donors found</h5>
              <p className="text-secondary">
                Try another blood group or city.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FindDonors;
