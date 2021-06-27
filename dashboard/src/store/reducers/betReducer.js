import * as Types from '../actions/types';
const init = {
    bet:[]
}

const betReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_BET:
            return{
                bet: action.payload.bet
            }
        default:
            return state
    }
}

export default betReducer