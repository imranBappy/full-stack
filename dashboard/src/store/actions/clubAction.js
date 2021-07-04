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
        dispatch({
            type: Types.SET_ALERT,
            payload:'Server side error'
        })
    }
}

export const loadAllClub = (page) => async dispatch => {
    try {
        const res = await axios.get(`/club/get-all-club?page=${page}`);
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
            payload:'Server side error'
        })
    }
}