import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, desc, img, id, price, duration } = service;
    return (
        <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top p-2 rounded" alt="..." />
          <div className="card-body">
            <h4 className="card-title fs-4">{name}</h4>
            <p className="card-text">{desc}</p>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-primary">{duration}</h5>
                <h5 className="text-dark">${price}</h5>
            </div>
          </div>
          <div className="p-2">
            <Link to={`/myorder/${id}`}>
              <button className="btn btn-warning pb-2">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;