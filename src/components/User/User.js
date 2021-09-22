import React from 'react';
import './User.css'
const User = (props) => {
    console.log(props);
    return (
        <div className='user'>
            <h3>Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
        </div>
    );
};

export default User;