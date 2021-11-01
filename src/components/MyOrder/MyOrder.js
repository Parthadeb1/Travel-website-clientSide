import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const MyOrder = () => {
  const { packageId } = useParams();
  const [services, setServices] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/myOrder", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added succesfully");
        reset();
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="container-fluid mt-3">
      <h1 className="text-center text-primary">My Order</h1>
      <div className=" d-flestify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              {...register("Name", { required: true, maxLength: 30 })}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-2">
            <input
              {...register("email")}
              type="email"
              className="form-control p-3"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("city")}
              className="form-control p-3"
              placeholder="City"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("address")}
              className="form-control p-3"
              placeholder="Address"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("Phone")}
              type="tel"
              className="form-control p-3"
              placeholder="Phone"
            />
          </div>
          <div className="mb-2">
            <input
              type="submit"
              className="form-control p-2 text-black fw-bold fs-5 bg-warning"
            />
          </div>
        </form>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={services.img}
                className="card-img-top p-2 rounded"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title fs-4">{services.Name}</h4>
                <p className="card-text">{services.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-primary">{services.duration}</h5>
                  <h5 className="text-dark">${services.price}</h5>
                </div>
                <div className="mt-2">
                  <button className="btn btn-danger p-2 text-white">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          s
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
