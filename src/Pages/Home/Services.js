import React from "react";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      image: fluoride,
      name: "Fluoride Treatment",
      body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      image: cavity,
      name: "Cavity Filling",
      body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      image: whitening,
      name: "Teeth Whitening",
      body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-14 mx-10">
      <div className=" text-center mb-10">
        <h3 className="font-bold text-primary uppercase text-2xl">
          Our Services
        </h3>
        <h2 className="font-sans text-3xl mt-2">Services we provide</h2>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
