import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className=" shadow-xl my-24 py-10"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">Contact Us</h2>
        <h2 className="text-2xl text-white mb-5">Stay connected with us</h2>

        <input
          type="text"
          placeholder="Email address"
          className="input input-bordered input-primary w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-md"
        />
        <textarea className="textarea textarea-primary w-full max-w-md" placeholder="Bio"></textarea>
        <div className="w-full max-w-md">
        <button className="btn w-full block bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
