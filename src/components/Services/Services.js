import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./tourPackages.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
            <div className="container mt-5">
      <h1 className="text-center fs-1 fw-bold">
        Our Special <span className="text-danger">Tour Packages</span>{" "}
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Services;