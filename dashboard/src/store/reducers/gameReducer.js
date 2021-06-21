import * as Types from '../actions/types';
const init = {
    game:[],
    length:0
}

const gameReducer = (state = init, action) =>{
    
    switch(action.type){
        case Types.SET_GAME:
            return {
                game:action.payload.game ,
                length: action.payload.length
            }
        default:
            return state;
    }
}
export default gameReducer
