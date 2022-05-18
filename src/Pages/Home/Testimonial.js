import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Feedback from './Feedback';

const Testimonial = () => {

    const testimonials = [
        {
            _id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            img: person1
        },
        {
            _id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Alexa Hope',
            city: 'Las Vegas',
            img: person2
        },
        {
            _id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'William Lisa',
            city: 'New York',
            img: person3
        }
    ]

    return (
        <div className='px-12 mb-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-secondary font-bold mb-2'>Testimonial</h3>
                    <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-1/2 ml-auto' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 mt-12'>
                {
                    testimonials.map(testimonial => <Feedback key={testimonial._id} testimonial={testimonial}></Feedback>)
                }
            </div>
        </div>
    );
};

export default Testimonial;