import React from 'react';
import specialService from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const SpecialService = () => {
    return (
        <div class="hero min-h-screen px-24 py-24">
            <div class="w-full hero-content flex-col lg:flex-row">
                <div className='w-1/2 pr-14'>
                    <img src={specialService} className='rounded-lg' />
                </div>
                <div className='w-1/2 pl-14'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default SpecialService;