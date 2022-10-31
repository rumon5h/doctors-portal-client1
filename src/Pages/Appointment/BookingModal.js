import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, 'PP')
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const phone = e.target.number.value;

    const booking = {
      treatmentId : _id,
      treatment : name,
      date: formattedDate,
      slot : slot,
      patientName : user.displayName,
      patientEmail : user.email,
      phone : phone
    }
    fetch("http://localhost:5000/booking", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
      setTreatment(null)

    })

   

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
            <select name="slot" className="select select-bordered w-full max-w-md">
              {
                slots.map((slot, index) => <option key={index}  value={slot}>{slot}</option> )
              }
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName}
              name="name"
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className=" input input-bordered input-accent w-full max-w-md"
            />
            <input
              type="number"
              required
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
