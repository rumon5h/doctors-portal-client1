import React from "react";

const BookingModal = ({treatment}) => {
    const {name, slots} = treatment;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 className="font-bold text-secondary text-lg">
           {name}
          </h3>
         <form action="">
         <input type="text" placeholder="Type here" className="mb-2 input input-bordered input-accent w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="mb-2 input input-bordered input-accent w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="mb-2 input input-bordered input-accent w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="mb-2 input input-bordered input-accent w-full max-w-xs" />
          <input type="submit" value="Submit" className="input input-bordered btn-secondary text-white w-full max-w-xs" />
         </form>

          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
