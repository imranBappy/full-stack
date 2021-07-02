import React from 'react';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import Profile from '../../components/Profile/Profile';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

const Statement = () => {
    const data = [
        {
            name: 'Profile',
            path:'/statement'
        },
        {
            name: 'Bets',
            path:'/bet'
        },
        {
            name: 'Traction',
            path:'/traction'
        },
        {
            name: 'Profile',
            path:'/profile'
        },
        {
            name: 'Profile',
            path:'/profile'
        },
        {
            name: 'Profile',
            path:'/profile'
        }
    ]
    return (
        <div>
            <ScrollBar data={data}/>
            <PrivateRoute path='/' component={Profile} />
        </div>
    );
};

export default Statement;