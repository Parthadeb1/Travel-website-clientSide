import React from 'react';
import aboutus from '../../images/aboutus.jpg';
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUS = () => {
    const element1 = <FontAwesomeIcon icon={faHandPointRight} />;
    return (
        <div className="mb-5 mt-5">
        <div className="row container-fluid">
            <h1 className="text-center">Know More <span className="text-danger">About Us</span> </h1>
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <div className="w-100">
              <img className="w-100 rounded" src={aboutus} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
          <div className="p-5">
              <h1 className="fs-1 fw-bold text-gray">
                We are Your{" "}
                <span className="text-danger">TravelMate</span>{" "}
              </h1>
  
              <p className="fs-4">
                <span className="text-info">{element1}</span> We have proffesional
        Tour Guide.
              </p>
              <p className="fs-4">
                <span className="text-info">{element1}</span> we have best destination in a reasonable price.
              </p>
              <p className="fs-4">
                <span className="text-info">{element1}</span> We have most valuable serviecs that customer satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUS;