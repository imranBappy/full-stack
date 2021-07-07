import * as Types from './types';
import axios from 'axios';
export const depositRequestAction = (deposit, user) => async dispatch => {
    try {
        
        const res = await axios.post('/transaction/add', {...deposit, user: user._id});
        if (deposit.transaction === 'withdraw' && res.data.error === false) {
            user.balance = user.balance - Number(deposit.amount)
        }

        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message:res.data.message,
                error: res.data.error
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message:'There was server side error',
                error: true
            }
        })
    }
}

export const transitionGetAction = (page, user) => async dispatch => {
    try {
        const res = await axios.get(`/transaction?page=${page}&user=${user}`);
        if (res.data.error)dispatch({
            type: 'SET_ALERT',
            payload: {
                message:'There was an error', error: true
            }
        })      
        dispatch({
            type: 'SET_TRANSACTION',
            payload: {
                transaction: res.data.transaction,
                length: res.data.length
            }
        }) 
    } catch (error) {
        dispatch({
            type: 'SET_ALERT',
            payload: {
                message:'There was an error', error: true
            }
        })      
    }
}