import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to delete?");

    if (procced) {
      const url = `http://localhost:5000/packages/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("succesfully deleted");
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    }
  };
  return (
    <div className="container-fluid">
      <h1 className="text-center">Manage order</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {services.map((service) => (
          <div key={service._id} className="col">
            <div className="card h-100">
              <img
                src={service.img}
                className="card-img-top p-2 rounded"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title fs-4">{service.Name}</h4>
                <p className="card-text">{service.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-primary">{service.duration}</h5>
                  <h5 className="text-dark">${service.price}</h5>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger p-2 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
