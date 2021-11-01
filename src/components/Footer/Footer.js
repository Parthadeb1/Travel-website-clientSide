import React from 'react';
import {
    faEnvelopeOpenText,
    faPhoneSquareAlt,
    faStreetView,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faStreetView} />;
    const element2 = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
    const element3 = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
    return (
            <div className="container-fluid mt-4 bg-dark text-light">
      <div className="d-flex justify-content-between">
        <div className="item-center p-4">
          <div>
            <h1 className="fs-3 fw-bold">
              Relax<span className="text-danger">Travel</span>{" "}
            </h1>
            <div className="w-50 text-auto">
              <p>
              “Take vacations, go as many places as you can, you can always make money, you can’t awakes make memories.”
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h1>Contact</h1>
          <p>{element1} 350 Avenue, Baridhara, Dhaka 1212</p>
          <p>{element2} relax.travel8@gamil.com </p>
          <p>{element3} +8801923733234 </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center align-item-center">
        <h5>®™ Copyright reserve to Relax<span className="text-danger">Travel</span> </h5>
      </div>
    </div>
    );
};

export default Footer;