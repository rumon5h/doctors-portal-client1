import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero bg-hero-pattern min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="lg:w-[50%]" src={chair} alt="chair" />
        <div className="w-[100%]">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
