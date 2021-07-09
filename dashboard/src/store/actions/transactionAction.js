import * as Types from './types';
import axios from 'axios';
export const allTransactionGetAction = (page, transaction) => async dispatch =>{
    try {
        const res = await axios.get(`/transaction?transaction=${transaction}&page=${page}`);
        console.log(transaction);
        dispatch({
            type: transaction==='withdraw'? Types.SET_WITHDRAW: Types.SET_DEPOSIT,
            payload:{
                transaction: res.data.transaction,
                length: res.data.length,
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'There was a server error',
                error: true
            }
        })
    }
}

export const transactionAcceptAction = (transaction,index, rows, length, status, path) => async dispatch =>{
    try {
        if (transaction.status === status) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: `Al ready transaction ${status}`,
                error: false
            }
        });
        const updateTransaction = await axios.patch(`/transaction/update-transaction/${transaction._id}?status=${transaction.status}&userId=${transaction.user._id}`);
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: updateTransaction.data.message,
                error: updateTransaction.data.error,
            }
        })
        rows.splice(index, 1,updateTransaction.data.transaction )
        dispatch({
            type: path==='/withdraw'? Types.SET_WITHDRAW: Types.SET_DEPOSIT,
            payload:{
                transaction: rows,
                length,
            }
        })
        
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'There was a server error',
                error: true
            }
        })
    }
}