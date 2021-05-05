import React from 'react';

const Destination = ({ data }) => {
    const { image, name } = data;
    return (
        <div className="col-md-3 text-center mt-5 pt-5">
            <div>
                <img style={{ width: '150px' }} src={image} alt="trien" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Destination;