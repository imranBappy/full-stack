import * as Types from '../actions/types';

const init ={
    transaction:[]
}
const depositReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_DEPOSIT:
            return{
                transaction: action.payload.transaction
            }
        default:
            return state;
    }
}

export default depositReducer;