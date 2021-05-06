import React from 'react';
import style from './destination.module.css';

const Destination = ({ data }) => {
    const { image, name } = data;
    return (
        <div className={`${style.destination} col-md-3 text-center p-5`}>
            <div onClick={() => console.log('hello')} className={`${style.destinationSingle}`}>
                <img style={{ width: '150px' }} src={image} alt="trien" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Destination;