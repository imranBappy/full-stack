import axios from 'axios';
import * as Types from './types';

export const betAction = (userBit, auth) => async dispatch=>{
    try {
        const res = await axios.post(`/usersbet/adduserbet`, userBit);
        auth.user.balance = auth.user.balance - Number(userBit.amount)
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message:res.data.message,
                error: res.data.error
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message:'There was an error', error: true
            }
        })
    }
}