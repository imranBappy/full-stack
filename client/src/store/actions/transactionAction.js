import * as Types from './types';
import axios from 'axios';
export const depositRequestAction = (deposit) => async dispatch => {
    try {
        const res = await axios.post('/transaction/add', deposit);
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