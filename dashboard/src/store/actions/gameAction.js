import Axios from 'axios';
import * as Types from './types';

export const gameAddAction = (game, history, data) => async dispatch =>{
    try {
        const result = await Axios.post('http://localhost:4000/game/add', game);
        if(result.data.error)return dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: true,
                message:'Server side error'
            }
        });
        
        dispatch({
            type: Types.SET_GAME,
            payload:{
                game:[...data.game, result.data.data],
                length: data.length + 1
            }
        })

        dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: false,
                message:'Game Created successfully!'
            }
        });
        history.push('/game?page=0')

    }catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: true,
                message:'Server side error'
            }
        });
    }
}

export const gameLodeAction = page => async dispatch =>{
     try {
        const loadGame = await Axios.get(`http://localhost:4000/game/get-all?page=${page}`)
        if(loadGame.data.error){
            return dispatch({
                type: Types.SET_ALERT,
                payload:{
                    error: true,
                    message:'Server side error'
                }
            })
        }
        dispatch({
            type: Types.SET_GAME,
            payload:{
                game:loadGame.data.data,
                length: loadGame.data.length
            }
        })
        
    }catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: true,
                message:'Server side'
            }
        });
    }
}

export const gameStatusAction = (game , index, gameArr, length) => async dispatch => {
    try {
        game.status === 'Upcoming'? game.status = 'Live' : game.status = 'Upcoming'
        const newGame = await Axios.patch('http://localhost:4000/game/game-update', game)
        gameArr.splice(index, 1, newGame.data.result);
        dispatch({
            type: Types.SET_GAME,
            payload:{
                game:gameArr,
                length
            }
        })
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message:newGame.data.message,
                error:newGame.data.error
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: true,
                message:'Server side'
            }
        });
    }
}
export const gameActionAction = (game , index, gameArr, length) => async dispatch => {
    
    try {
        game.isActive ? game.isActive = false : game.isActive = true
        const newGame = await Axios.patch('http://localhost:4000/game/game-update', game)
        gameArr.splice(index, 1, newGame.data.result);
        dispatch({
            type: Types.SET_GAME,
            payload:{
                game:gameArr,
                length
            }
        })
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message:newGame.data.message,
                error:newGame.data.error
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                error: true,
                message:'Server side'
            }
        });
    }
}