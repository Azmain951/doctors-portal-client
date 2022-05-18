import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SpecialService from './SpecialService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialService></SpecialService>
        </div>
    );
};

export default Home;