import React from 'react';
import style from './destination.module.css';
import { useHistory } from 'react-router-dom';

const Destination = ({ agency }) => {
    const { image, name } = agency;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/agency/${name}`);
    }

    return (
        <div onClick={() => handleClick(name)} className={`${style.destination} col-md-3 text-center p-5`}>
            <div className={`${style.destinationSingle}`}>
                <img style={{ width: '150px' }} src={image} alt={name} />
                <h5>{name}</h5>
            </div>
        </div >
    );
};

export default Destination;