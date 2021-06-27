import * as Types from './types';

import axios from "axios";

export const clubAction = club => async dispatch =>{
    try {
        const res = await axios.post(`/club/add-club`, club)
          dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: res.data.error
            }
         })
    } catch (error) {
        console.log(error);
    }
}