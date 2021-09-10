import * as Types from './types';

import Axios from 'axios';

export const betAction  = (bet, history) => async dispatch =>{
    try {
        const result  = await Axios.post(`https://day20.herokuapp.com/bet/post-title`, bet)
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
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server was a side error',
                error: true
            }
        })
    }
}

export const resultAction = (question) => async dispatch => {
    try {
        await Axios.post(`https://day20.herokuapp.com/bet/add-bet`, question)
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'Successfully question created !',
                error: false
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

export const loadAllBet = (gameId) => async dispatch => {
    try {
        const data = await Axios.get(`https://day20.herokuapp.com/bet/get-all-bet?gameId=${gameId}`);
        dispatch({
            type: Types.SET_BET,
            payload: {
                bet: data.data.data
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

export const betActionAction = (bet, index, bets) => async dispatch => {
    try {
        const response = await Axios.put(`https://day20.herokuapp.com/bet/bet-update`, bet);
        if (response.data.error) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: response.data.message,
                error: response.data.error
            }
        });
        bets.splice(index, 1, response.data.bet);
        dispatch({
            type: Types.SET_BET,
            payload: {
                bet: bets
            }
        })
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: response.data.message,
                error: response.data.error
            }
        });
        
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
export const resultShowAction = (result, resultIndex, bet, index, bets) => async dispatch => {
    try {
        const res = await Axios.put(`https://day20.herokuapp.com/bet/result-update`,result )
        bet.question.splice(resultIndex,1, res.data.result)
        bets.splice(index,1, bet);
        dispatch({
            type: Types.SET_BET,
            payload: {
                bet: bets
            }
        });
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error:res.data.error
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