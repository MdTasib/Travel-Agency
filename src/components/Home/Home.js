import React from 'react';
import datas from '../FakeData/Data';
import Destination from '../Destination/Destination';
import style from './home.module.css';

const Home = () => {
    return (
        <div className={`${style.home} row text-center p-5`}>
            {
                datas.map((data, index) => <Destination key={index} data={data} />)
            }
        </div>
    );
};

export default Home;