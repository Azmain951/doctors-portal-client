import React from 'react';
import service1 from '../../assets/images/fluoride.png';
import service2 from '../../assets/images/cavity.png';
import service3 from '../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-center text-secondary font-bold text-xl uppercase mb-2'>Our Services</h2>
            <h1 className='text-center text-accent text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 my-16'>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={service1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={service2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={service3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;