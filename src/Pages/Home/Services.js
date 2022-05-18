import React from 'react';
import service1 from '../../assets/images/fluoride.png';
import service2 from '../../assets/images/cavity.png';
import service3 from '../../assets/images/whitening.png';
import Service from './Service';
import SpecialService from './SpecialService';

const Services = () => {
    const services = [
        {
            _id: 1,
            h2: 'Fluoride Treatment',
            p: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: service1
        },
        {
            _id: 2,
            h2: 'Cavity Filling',
            p: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: service2
        },
        {
            _id: 3,
            h2: 'Teeth Whitening',
            p: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: service3
        }
    ]
    return (
        <div className='mt-32 px-12'>
            <h2 className='text-center text-secondary font-bold text-xl uppercase mb-2'>Our Services</h2>
            <h1 className='text-center text-accent text-4xl'>Services We Provide</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <SpecialService></SpecialService>
        </div>
    );
};

export default Services;