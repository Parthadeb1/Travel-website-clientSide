import React from 'react';

const Guide = ({guide}) => {
    const { name , profession,img} = guide;
    return (
        <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top p-2" alt="..." />
        <div className="card-body">
          <h4 className="card-title fs-4">{name}</h4>
          <p className="card-text fs-5 text-danger">{profession}</p>
        </div>
      </div>
    </div>
    );
};

export default Guide;