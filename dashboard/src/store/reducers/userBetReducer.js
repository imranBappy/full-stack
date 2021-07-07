import * as Types from '../actions/types';

const init = {
    userBet: [], length: 0
}

const userBetReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_USER_BET : return{
            userBet: action.payload.bet,
            length: action.payload.length
        }
        default: return state
    }
}

export default userBetReducer;