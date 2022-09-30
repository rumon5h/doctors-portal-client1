import React from "react";
import treatment from '../../assets/images/treatment.png';

const Terms = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt="Treatment"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mt-5 lg:mt-0 lg:ml-2 ">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
