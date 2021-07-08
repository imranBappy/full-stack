import * as Types from './types';
import axios from 'axios';
export const allTransactionInputGetAction = (page, transaction) => async dispatch =>{
    try {
        const res = await axios.get(`/transaction?transaction=${transaction}&page=${page}`);
        dispatch({
            type: transaction==='withdraw'? Types.SET_WITHDRAW: Types.SET_TransactionInput,
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

export const TransactionInputAcceptAction = (TransactionInput,index, rows, length, status, path) => async dispatch =>{
    try {
        if (TransactionInput.status === status) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: `Al ready TransactionInput ${status}`,
                error: false
            }
        });
        const updateTransaction = await axios.patch(`/transaction/update-transaction/${TransactionInput._id}?status=${TransactionInput.status}&userId=${TransactionInput.user._id}`);
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: updateTransaction.data.message,
                error: updateTransaction.data.error,
            }
        })
        rows.splice(index, 1,updateTransaction.data.transaction )
        dispatch({
            type: path==='/withdraw'? Types.SET_WITHDRAW: Types.SET_TransactionInput,
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