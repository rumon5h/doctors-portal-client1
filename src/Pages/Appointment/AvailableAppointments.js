import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    console.log(date);


    useEffect(() => {
      fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
    }, [])
    
    return (
        <div className='my-14'>
            <h1 className='text-secondary text-xl text-center'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
                {
                    services.map(service => <Service key={service._id} setTreatment={setTreatment} service={service}></Service> )
                }
            </div>
            {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;