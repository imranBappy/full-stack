import * as Types from '../actions/types';
const init = {
    admin:[]
}
export const adminReducer = (state = init, action) =>{
    switch (action.type) {
        case Types.SET_ADMIN:
            return {
                admin: action.payload.admin
            }
        default:
            return state
    }
}
