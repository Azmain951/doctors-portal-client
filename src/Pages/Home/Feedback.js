import React from 'react';

const Feedback = ({ testimonial }) => {
    const { text, name, img, city } = testimonial;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className="flex items-center mt-8">
                    <div>
                        <img src={img} alt="" className='border-secondary p-0.5 border-2 rounded-full w-3/4' />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-accent'>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;