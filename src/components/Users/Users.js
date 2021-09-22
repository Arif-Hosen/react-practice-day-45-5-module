import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='users-container'>
            <h1>Users Loaded</h1>
            {
                users.map(user => <User name={user.name} email={user.email}></User>)
            }

        </div>
    );
};

export default Users;