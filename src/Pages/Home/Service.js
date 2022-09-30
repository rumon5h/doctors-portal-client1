import React from "react";

const Service = ({service}) => {
  return (
    <div className="card bg-white shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={service.image}
          alt={service.name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.body}</p>
       
      </div>
    </div>
  );
};

export default Service;
