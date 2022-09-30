import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

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
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea className="textarea textarea-primary w-full max-w-xs" placeholder="Bio"></textarea>
        <PrimaryButton>Send Message</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
