import * as Types from '../actions/types';

const init ={
    transaction:[], length: 0
}
const TransactionInputReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_TransactionInput:
            return{
                transaction: action.payload.transaction,
                length: action.payload.length
            }
        default:
            return state;
    }
}

export default TransactionInputReducer;