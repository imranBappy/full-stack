import * as Types from '../actions/types';

const init = {
    isAuthenticated: false,
    user:{},
    token:''
}

const authReducer = (state = init , action)=>{
    switch (action.type){
        case Types.SET_AUTH:
            return{
                isAuthenticated: action.payload.auth,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default authReducer