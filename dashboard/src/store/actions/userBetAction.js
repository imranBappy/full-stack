import * as Types from './types';
import axios from 'axios';

export const userBetGetAction = (page) => async dispatch => {
    try {
        const bet = await axios.get(`https://day20.herokuapp.com/usersbet?page=${page}`);
        dispatch({
            type: Types.SET_USER_BET,
            payload:{
                bet: bet.data.bet,
                length: bet.data.length
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

export const betStatusAction = (result, resultIndex, allResult, c, status, singleBet, betIndex, allBet) => async dispatch => {
    try {
        result.status === 'Accepted' ? result.status = 'Win' : result.status = 'Loss'
        const res = await axios.patch(`https://day20.herokuapp.com/usersbet/result-status-update?resultId=${result._id}&status=${result.status}`)
        if (res.data.error) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: true
            }
        });
        if (result.status === status) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: `Al ready TransactionInput ${status}`,
                error: false
            }
        });
        allResult.splice(resultIndex, 1, result)
        singleBet.question = allResult
        allBet.splice(betIndex,1,singleBet)
        dispatch({
            type: Types.SET_BET,
            payload: {
                bet: allBet
            }
        })
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