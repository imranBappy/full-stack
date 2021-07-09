import React from 'react';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import Profile from '../../components/Profile/Profile';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Bet from '../../components/Bet/Bet';
import data from '../../data/statement';
import Transaction from '../../components/Transaction/Transaction';
import TransactionInput from '../../components/TransactionInput/TransactionInput';
import BalanceTransfer from '../../components/BalanceTransfer/BalanceTransfer';
import Setting from '../../components/Setting/Setting';
import BalanceTransferFrom from '../../components/BalanceTransfer/BalanceTransferFrom';
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
            <PrivateRoute path='/statement/deposit'>
                <TransactionInput transaction ='deposit' />
            </PrivateRoute>
            <PrivateRoute path='/statement/transfer'>
                <BalanceTransfer />
            </PrivateRoute>
            <PrivateRoute path='/statement/send-transfer'>
                <BalanceTransferFrom/>
            </PrivateRoute>
            <PrivateRoute path='/statement/setting'>
                <Setting />
            </PrivateRoute>
        </div>
    );
};

export default Statement;