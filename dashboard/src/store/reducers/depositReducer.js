import * as Types from '../actions/types';

const init ={
    transaction:[], length: 0
}
const depositReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_DEPOSIT:
            console.log(action.payload)
            return{
                transaction: action.payload.transaction,
                length: action.payload.length
            }
        default:
            return state;
    }
}

export default depositReducer;