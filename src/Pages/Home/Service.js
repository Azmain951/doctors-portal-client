import React from 'react';

const Service = ({ service }) => {
    const { h2, p, img } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent">{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default Service;