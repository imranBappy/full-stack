import React from 'react';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import Profile from '../../components/Profile/Profile';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Bet from '../../components/Bet/Bet';
const Statement = () => {
    const data = [
        {
            name: 'Profile',
            path:'/statement'
        },
        {
            name: 'Bets',
            path:'/statement/bet?page=0'
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
            <PrivateRoute exact path='/statement' component={Profile} />
            <PrivateRoute path='/statement/bet' component={Bet} />
        </div>
    );
};

export default Statement;