import React, { useEffect, useState } from "react";
import Guide from "./Guide/Guide";

const Guides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/guides")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center fs-1 fw-bold">
        Meet Our <span className="text-danger">Professional Guide</span>{" "}
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {guides.map((guide) => (
          <Guide key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default Guides;
