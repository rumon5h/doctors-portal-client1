import React from 'react';
import MakeAppointment from '../../MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
            <MakeAppointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;