import * as Types from '../actions/types';
const init = {user:[], length: 0}
const userReducer = (state = init , action)=>{
    switch (action.type) {
        case Types.SET_USER:
            return {
                user:action.payload.user,
                length:action.payload.length
            }
        default:
            return state
    }
}
export default userReducer;