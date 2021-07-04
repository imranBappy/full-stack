import axios from 'axios';
import decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import * as Types from './types';
export const authAction = (user, history) => async dispatch =>{
    try {
        const result = await axios.post('/admin/login', user)
        if (result.data.error)return dispatch({
            type: Types.SET_ALERT,
            payload:result.data
        })
        if ( result.data.token) {
            localStorage.setItem('admin-token', result.data.token)
        }
        dispatch({
            type: Types.SET_AUTH,
            payload:{
                auth: true,
                token:result.data.token,
                user: decode(result.data.token)
            }
        })
        setAuthHeader(result.data.token)
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: result.data.message,
                error:result.data.error
            }
        })

        history.push('/')
        
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server was a side error',
                error: true
            }
        })
    }
}

export const logoutAction = ()=> dispatch =>{
        dispatch({
            type: Types.SET_AUTH,
            payload:{
                auth: false,
                token:'',
                user: {}
            }
        })
        localStorage.removeItem('admin-token')
}
