import React from 'react';

const Service = ({ service }) => {
    const { h2, p, img } = service
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-accent">{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default Service;