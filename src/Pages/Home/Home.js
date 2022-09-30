import React from 'react';
import MakeAppointment from '../../MakeAppointment';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;