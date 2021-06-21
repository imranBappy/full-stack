// import * as Types from './types';

import Axios from 'axios';

export const betAction  = (game, history) => async dispatch =>{
    try {
        const result  = await Axios.post(`http://localhost:4000/bet/post`, game)
        if (result.data._id) {
            history.push(`/bet-add/${game.game}?bet=${result.data._id}`)
        }
    } catch (error) {
        console.log(error);
    }
}