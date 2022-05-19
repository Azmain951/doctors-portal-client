import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-center block mb-2">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center mt-4">
                    <label for="booking-modal" class="btn btn-secondary text-white uppercase"
                        disabled={slots.length === 0} onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;