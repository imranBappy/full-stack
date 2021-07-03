import * as Types from './types';
import axios from 'axios';
export const allDepositGetAction = () => async dispatch =>{
    try {
        const res = await axios.get(`/transaction?transaction=deposit&page=0`);
        console.log(res.data.transaction);
        dispatch({
            type: Types.SET_DEPOSIT,
            payload:{
                transaction: res.data.transaction,
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