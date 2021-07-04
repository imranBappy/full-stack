import * as Types from './types';
import axios from 'axios';
export const allDepositGetAction = (page) => async dispatch =>{
    try {
        const res = await axios.get(`/transaction?transaction=deposit&page=${page}`);
        
        dispatch({
            type: Types.SET_DEPOSIT,
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

export const depositAcceptAction = (deposit,index, rows, length, status) => async dispatch =>{
    try {
        if (deposit.status === status || deposit.status === status) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: `Al ready deposit ${deposit.status}`,
                error: false
            }
        });
        const updateTransaction = await axios.patch(`/transaction/update-transaction/${deposit._id}?status=${deposit.status}&userId=${deposit.user._id}&balance=${deposit.user.balance}`);
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: updateTransaction.data.message,
                error: updateTransaction.data.error,
            }
        })
        rows.splice(index, 1,updateTransaction.data.transaction )
        dispatch({
            type: Types.SET_DEPOSIT,
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