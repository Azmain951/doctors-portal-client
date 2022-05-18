import React from 'react';

const InfoCard = ({ img, bg, text, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`} >
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