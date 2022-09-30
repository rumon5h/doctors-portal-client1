import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;