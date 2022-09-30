import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero bg-hero-pattern min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="lg:max-w-[594px]" src={chair} alt="chair" />
        <div className="card p-5 mx-4 shadow-xl bg-white w-[fit-content]">
        <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        />
        
        </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;