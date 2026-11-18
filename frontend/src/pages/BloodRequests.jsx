
import React from "react";

const BloodRequests = () => {
  const requests = [
    {
      id: 1,
      patient: "Patient A",
      group: "O+",
      hospital: "City Hospital",
      city: "Rajkot",
      units: 2,
      urgency: "Urgent",
    },
    {
      id: 2,
      patient: "Patient B",
      group: "B+",
      hospital: "Civil Hospital",
      city: "Ahmedabad",
      units: 1,
      urgency: "Normal",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Blood <span className="text-danger">Requests</span>
          </h1>
          <p className="text-secondary">
            Help patients by connecting with their blood requirements.
          </p>
        </div>

        <div className="row g-4">
          {requests.map(request => (
            <div className="col-md-6" key={request.id}>
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold">{request.patient}</h5>
                  <span className="blood-label">{request.group}</span>
                </div>

                <p className="text-secondary mb-2">
                  Hospital: {request.hospital}
                </p>

                <p className="text-secondary mb-2">
                  Location: {request.city}
                </p>

                <p className="text-secondary mb-3">
                  Required Units: {request.units}
                </p>

                <span className={`badge ${
                  request.urgency === "Urgent"
                    ? "bg-danger"
                    : "bg-success"
                } align-self-start mb-3`}>
                  {request.urgency}
                </span>

                <a
                  href="/become-donor"
                  className="btn btn-outline-danger"
                >
                  Help This Patient
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BloodRequests;
