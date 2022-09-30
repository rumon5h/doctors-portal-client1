import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="hero bg-hero-pattern min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="lg:w-[50%]" src={chair} alt="chair" />
        <div className="w-[100%]">
        <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        />
        <p>You picked {format(date, 'PP')}.</p>;
        </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;