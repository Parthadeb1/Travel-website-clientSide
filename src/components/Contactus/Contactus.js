import React from 'react';
import contactus from '../../images/contactus.jpg'

const Contactus = () => {
    return (
        <div>
             <div className="container">
        <h1 className="fs-1 fw-bold text-center my-5">
          Feel Free To <span className="text-danger">Contact Us</span>{" "}
        </h1>
        <div className="row">
          <div className="col-sm-5">
            <img className="rounded" src={contactus} alt="" />
          </div>
          <div className="col-sm-7">
            <div className=" d-flex flex-column justify-content-center align-items-center mt-3">
              <h2 className="fw-bold mb-4">
                We'll love To Here From You
              </h2>
              <form className="w-75 mx-auto">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control p-3"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary fw-bold text-white "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Contactus;