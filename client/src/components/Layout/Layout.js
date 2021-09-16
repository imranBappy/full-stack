import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Statement from '../../pages/Statement/Statement';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import _Login from '../../pages/Login/_Login';
import _Signup from '../../pages/Signup/_Signup';
import _Wallet from '../../pages/Wallet/_Wallet';
import Modal from '../Modal/Modal';
import { Switch } from 'react-router-dom';
import Footer from './../Footer/Footer';

export const ModalContext = createContext()
export const BetContext = createContext()

const Layout = (props) => {
    const [open, setOpen] = useState({
        display:'none',
        component:'TransactionInput'
    });
    const [bet, setBet] = useState({
        amount:100,
        game:'',
        bet:'',
        result:'',
    })
    return (
        <>
            <Switch>
                <BetContext.Provider value={[bet, setBet]}>
                    <ModalContext.Provider value={[open, setOpen]} >
                        <Navbar/>
                        <Modal/>
                        {props.children}
                    </ModalContext.Provider>
                <Footer/>
                </BetContext.Provider>
            </Switch>
        </>
    );
};

export {Statement, PrivateRoute, Home, _Login, _Signup, _Wallet}
export default Layout;
