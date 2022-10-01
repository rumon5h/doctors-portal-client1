import React from "react";
import { useLocation } from "react-router-dom";
import appointment from "../../assets/images/appointment.png";
import Footer from "../Shared/Footer";

const Contact = () => {
  const {pathname} = useLocation();

  const handleMessageSubmit = (e)=> {
    e.preventDefault();

  }

  return (
   <>
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className=" shadow-xl mt-10 py-10"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">Contact Us</h2>
        <h2 className="text-2xl text-white mb-5">Stay connected with us</h2>

        <form
        onSubmit={handleMessageSubmit}
        className="grid grid-cols-1 gap-6 w-full justify-items-center">
        <input
        required
          type="text"
          name="email"
          placeholder="Email address"
          className="input input-bordered input-primary w-full max-w-md"
        />
        <input
        required
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-md"
        />
        <textarea name="message" required className="textarea textarea-primary w-full max-w-md" placeholder="Message"></textarea>
        <div className="w-full max-w-md">
        <input type="submit" className="btn w-full block bg-gradient-to-r from-secondary to-primary text-white font-bold border-none"/>
        </div>
        </form>
      </div>
    </div>
    {
      pathname === '/contact' && <Footer/>
    }
   </>
  );
};

export default Contact;
