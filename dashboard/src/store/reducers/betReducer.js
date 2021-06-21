import * as Types from '../actions/types';
const init = {
    title:'',
    bet:[]
}

const betReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_BET:
            return{
                title: action.payload.title,
                bet: action.payload.bet
            }
        default:
            return state
    }
}

export default betReducer