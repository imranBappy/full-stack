import * as Types from './types';

import Axios from 'axios';

export const betAction  = (bet, history) => async dispatch =>{
    try {
        const result  = await Axios.post(`/bet/post-title`, bet)
        if (result.data._id) {
            history.push(`/bet-add/${bet.game}?betId=${result.data._id}`)
            dispatch({
                type: Types.SET_ALERT,
                payload: {
                    message: 'Successfully bet created !',
                    error: false
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const resultAction = (question) => async dispatch => {
    try {
        await Axios.post(`/bet/add-bet`, question)
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'Successfully question created !',
                error: false
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const loadAllBet = (gameId) => async dispatch => {
    try {
        const data = await Axios.get(`/bet/get-all-bet?gameId=${gameId}`);
        dispatch({
            type: Types.SET_BET,
            payload: {
                bet: data.data.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}