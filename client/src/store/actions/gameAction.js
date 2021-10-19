import axios from 'axios';
import * as Types from './types';
export const allGameGetAction = () => async dispatch => {
    try {
        const game = await axios.get('https://day20.herokuapp.com/game/get-game');
        dispatch({
            type: Types.SET_GAME,
            payload: {
                game: game.data.game
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