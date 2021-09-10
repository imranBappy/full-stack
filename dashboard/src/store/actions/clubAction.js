import * as Types from './types';

import axios from "axios";

export const clubAction = club => async dispatch =>{
    try {
        const res = await axios.post(`https://day20.herokuapp.com/club/add-club`, club)
          dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: res.data.error
            }
         })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server was a side error',
                error: true
            }
        })
    }
}

export const loadAllClub = (page) => async dispatch => {
    try {
        const res = await axios.get(`https://day20.herokuapp.com/club/get-all-club?page=${page}`);
        dispatch({
            type: Types.SET_CLUB,
            payload:{
                club: res.data.club,
                length: res.data.length
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server was a side error',
                error: true
            }
        })
    }
}