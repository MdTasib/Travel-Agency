import React from 'react';
import datas from '../FakeData/Data';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <div className='row text-center'>
            {
                datas.map((data, index) => <Destination key={index} data={data} />)
            }
        </div>
    );
};

export default Home;