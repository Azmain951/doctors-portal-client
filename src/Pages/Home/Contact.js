import React from 'react';
import background from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div style={{
            background: `url(${background})`
        }} className='text-center py-16'>
            <h3 className='text-xl font-bold text-secondary'>Contact Us</h3>
            <h2 className='text-4xl text-white mb-8'>Stay connected with us</h2>
            <div className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-sm mb-4" />
                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-sm mb-4" />
                <textarea className="textarea textarea-bordered w-full max-w-sm mb-4" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;