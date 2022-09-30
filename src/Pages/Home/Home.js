import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
        </div>
    );
};

export default Home;