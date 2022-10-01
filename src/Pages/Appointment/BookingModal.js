import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    setTreatment(null)

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-secondary text-lg">{name}</h3>
          <form 
          onSubmit={handleBookingSubmit}
          className="grid grid-cols-1 gap-3 mt-3 justify-items-center"
          action="">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <select className="select select-bordered w-full max-w-md">
              {
                slots.map(slot => <option name="slot" value={slot}>{slot}</option> )
              }
            </select>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <input
              type="number"
              name="number"
              placeholder="Your Number"
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered btn-secondary text-white w-full max-w-md"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
