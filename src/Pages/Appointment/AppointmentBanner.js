import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import background from '../../assets/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div class="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
                <div>
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl mx-auto" alt='Dentist Chair' />
                </div>
                <div className='shadow-xl p-3 rounded-2xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;