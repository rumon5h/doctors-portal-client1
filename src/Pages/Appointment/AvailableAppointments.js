import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from 'react-query';
import { toast } from "react-toastify";


const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   );

   if(error){
    toast.error(error?.message);
   }

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="my-14">
      <h1 className="text-secondary text-xl text-center">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
