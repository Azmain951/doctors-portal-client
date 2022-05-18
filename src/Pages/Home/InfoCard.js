import React from 'react';

const InfoCard = ({ img, bg, text }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bg ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-accent'}`} >
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>

            <div class="card-body text-white">
                <h2 class="card-title">{text.h2}</h2>
                <p>{text.p}</p>
            </div>
        </div >
    );
};

export default InfoCard;