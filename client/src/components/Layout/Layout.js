import React from 'react';
import Navbar from '../Navbar/Navbar';
import Statement from '../../pages/Statement/Statement';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Home from '../../pages/Home/Home';
import _Login from '../../pages/Login/_Login';
import _Signup from '../../pages/Signup/_Signup';
import _Wallet from '../../pages/Wallet/_Wallet';

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
};

export {Statement, PrivateRoute, Dashboard, Home, _Login, _Signup, _Wallet}
export default Layout;
