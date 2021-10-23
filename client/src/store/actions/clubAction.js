import axios from "axios"
import * as Types from './types';
export const clubAction = () => async dispatch =>{
    try {
        const res = await axios.get('https://day20.herokuapp.com/club/get-ranking-club')
        dispatch({
            type: Types.SET_CLUB,
            payload:{
                club: res.data.club
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
export const clubUpdateAction = (club) => async dispatch =>{
    try {
        const res = await axios.put(`https://day20.herokuapp.com/club/update?club=${club}`);
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message:res.data.message, error: res.data.error
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
