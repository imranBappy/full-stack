import React from 'react';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import Profile from '../../components/Profile/Profile';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Bet from '../../components/Bet/Bet';
import data from '../../data/statement';
import Transaction from '../../components/Transaction/Transaction';
import TransactionInput from '../../components/TransactionInput/TransactionInput';
const Statement = () => {
    return (
        <div>
            <ScrollBar data={data()}/>
            <PrivateRoute exact path='/statement' component={Profile} />
            <PrivateRoute path='/statement/bet' component={Bet} />
            <PrivateRoute path='/statement/transaction' component={Transaction} />
            <PrivateRoute path='/statement/withdraw'>
                <TransactionInput transaction ='withdraw' />
            </PrivateRoute>

        </div>
    );
};

export default Statement;