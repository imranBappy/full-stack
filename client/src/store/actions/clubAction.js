import axios from "axios"
import * as Types from './types';
export const clubAction = () => async dispatch =>{
    try {
        const res = await axios.get('http://localhost:4000/club/get-ranking-club')
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