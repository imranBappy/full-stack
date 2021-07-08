import * as Types from '../actions/types';
const init = {
    withdraw:[],
    length: 0,
}
const withdrawReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_WITHDRAW:
            return {
                transaction: action.payload.transaction,
                length: action.payload.length
            }
        default: return state
    }
}
export default withdrawReducer
