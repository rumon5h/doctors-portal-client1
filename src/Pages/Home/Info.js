import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
            <InfoCard body="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard body="Brooklyn, NY 10036, United States" cardTitle="Visit our location" bgColor="bg-accent" img={marker}/>
            <InfoCard body="+8801306597401" cardTitle="Contact us now" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Info;