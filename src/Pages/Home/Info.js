import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const info = [
        {
            h2: 'Opening Hours',
            p: 'Lorem Ipsum is simply dummy text of the pri'
        },
        {
            h2: 'Visit our location',
            p: 'Brooklyn, NY 10036, United States '
        },
        {
            h2: 'Contact us now',
            p: '+000 123 456789'
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>

            <InfoCard img={clock} bgClass='bg-gradient-to-r from-secondary to-primary' text={info[0]}></InfoCard>
            <InfoCard img={marker} bgClass='bg-accent' text={info[1]}></InfoCard>
            <InfoCard img={phone} bgClass='bg-gradient-to-r from-secondary to-primary' text={info[2]}></InfoCard>
        </div >
    );
};

export default Info;