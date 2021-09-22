import React from 'react';

const Config = (props) => {

    const { processor, ram } = props.config;
    return (
        <div style={{ border: '3px solid salmon' }}>
            <h1>This is from config.</h1>
            <h3>Processor: {processor}</h3>
            <p>Ram: {ram}</p>
        </div>
    );
};

export default Config;