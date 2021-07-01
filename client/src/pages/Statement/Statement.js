import React from 'react';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
const Statement = () => {
    const data = [
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
            <h1>Statement component</h1>
        </div>
    );
};

export default Statement;