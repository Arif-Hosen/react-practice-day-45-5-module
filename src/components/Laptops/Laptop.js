import React from 'react';
import Config from '../Config/Config';
import './Laptop.css'
const Laptop = (props) => {
    const config = { processor: 'core i3', ram: '4gb' }

    return (
        <div >
            <h1 className='laptop'>This is from Laptop</h1>
            <h3>Name: {props.name}</h3>
            <p>Price: {props.price}</p>
            <Config config={config}></Config>
        </div >
    );
};

export default Laptop;