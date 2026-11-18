
import React, { useEffect, useState } from "react";

const initialStock = [
  { id: 1, bloodGroup: "A+", units: 25 },
  { id: 2, bloodGroup: "A-", units: 10 },
  { id: 3, bloodGroup: "B+", units: 30 },
  { id: 4, bloodGroup: "B-", units: 8 },
  { id: 5, bloodGroup: "AB+", units: 15 },
  { id: 6, bloodGroup: "AB-", units: 5 },
  { id: 7, bloodGroup: "O+", units: 40 },
  { id: 8, bloodGroup: "O-", units: 12 },
];

function BloodStock() {
  const [stock, setStock] = useState(() => {
    try {
      const savedStock = localStorage.getItem("bloodStock");
      return savedStock ? JSON.parse(savedStock) : initialStock;
    } catch {
      return initialStock;
    }
  });

  const [search, setSearch] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("bloodStock", JSON.stringify(stock));
  }, [stock]);

  const totalUnits = stock.reduce(
    (total, item) => total + Number(item.units),
    0
  );

  const lowStock = stock.filter(
    (item) => item.units > 5 && item.units <= 15
  ).length;

  const criticalStock = stock.filter(
    (item) => item.units <= 5
  ).length;

  const getStatus = (value) => {
    if (value <= 5) return "Critical";
    if (value <= 15) return "Low Stock";
    return "Available";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bloodGroup || units === "" || Number(units) < 0) {
      alert("Please enter valid blood stock details.");
      return;
    }

    const numericUnits = Number(units);

    if (editingId) {
      setStock((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, bloodGroup, units: numericUnits }
            : item
        )
      );
      alert("Blood stock updated successfully!");
    } else {
      const exists = stock.some(
        (item) => item.bloodGroup === bloodGroup
      );

      if (exists) {
        alert("This blood group already exists. Please edit its stock.");
        return;
      }

      setStock((prev) => [
        ...prev,
        {
          id: Date.now(),
          bloodGroup,
          units: numericUnits,
        },
      ]);

      alert("Blood stock added successfully!");
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setBloodGroup(item.bloodGroup);
    setUnits(String(item.units));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blood stock?")) {
      setStock((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setBloodGroup("");
    setUnits("");
  };

  const filteredStock = stock.filter((item) =>
    item.bloodGroup.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid py-4 px-3 px-md-4 bg-light min-vh-100">

      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-dark mb-1">Blood Stock Management</h2>
          <p className="text-muted mb-0">
            Manage and monitor available blood units.
          </p>
        </div>
        <span className="badge bg-danger fs-6 p-2 mt-2 mt-md-0">
          Admin Panel
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-sm-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Total Blood Units</p>
                  <h2 className="fw-bold text-danger">{totalUnits}</h2>
                </div>
                <div className="fs-1">🩸</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1">Low Stock Groups</p>
              <h2 className="fw-bold text-warning">{lowStock}</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1">Critical Stock Groups</p>
              <h2 className="fw-bold text-danger">{criticalStock}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Add / Update Stock Form */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white py-3">
          <h5 className="fw-bold mb-0">
            {editingId ? "Update Blood Stock" : "Add Blood Stock"}
          </h5>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-end">

              <div className="col-12 col-md-5">
                <label className="form-label fw-semibold">Blood Group</label>
                <select
                  className="form-select"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  required
                  disabled={Boolean(editingId)}
                >
                  <option value="">Select Blood Group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
                    .filter(
                      (group) =>
                        editingId ||
                        !stock.some((item) => item.bloodGroup === group)
                    )
                    .map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label fw-semibold">
                  Units Available
                </label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter units"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  required
                />
              </div>

              <div className="col-12 col-md-3 d-flex gap-2">
                <button type="submit" className="btn btn-danger flex-grow-1">
                  {editingId ? "Update Stock" : "Add Stock"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </div>

            </div>
          </form>
        </div>
      </div>

      {/* Blood Stock Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <h5 className="fw-bold mb-0">Blood Stock Details</h5>

            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "250px" }}
              placeholder="Search blood group..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-3">#</th>
                  <th>Blood Group</th>
                  <th>Available Units</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStock.length > 0 ? (
                  filteredStock.map((item, index) => {
                    const status = getStatus(item.units);

                    return (
                      <tr key={item.id}>
                        <td className="ps-3">{index + 1}</td>

                        <td>
                          <span className="badge bg-danger fs-6">
                            {item.bloodGroup}
                          </span>
                        </td>

                        <td className="fw-semibold">{item.units}</td>

                        <td>
                          <span
                            className={`badge ${
                              status === "Available"
                                ? "bg-success"
                                : status === "Low Stock"
                                ? "bg-warning text-dark"
                                : "bg-danger"
                            }`}
                          >
                            {status}
                          </span>
                        </td>

                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-muted">
                      No blood stock found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="text-muted small mt-3">
        * Current stock values are demo data stored in browser localStorage.
      </p>

    </div>
  );
}

export default BloodStock;
