import axios from 'axios';
import jwt from 'jwt-decode';
import store from '../store';
import * as Types from './types';

export const registerAction = (user, histroy) => async dispatch => {
    delete user.confirmPassword
    try {
        const result = await axios.post('/user/register', user);
        store.dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: result.data.message ? result.data.message : '',
                error: result.data.error ? true: false
            }
        })
        dispatch({
            type: Types.SET_USER,
            payload: user,
        });
     
        if (!result.data.error) {
            histroy.push('/login');
        }
    } catch (err) {
        dispatch({
            type: Types.SET_ALERT,
            payload: { message: 'Server side error', error: true },
        });
    }
};

export const loginAction = (user, history) => async dispatch =>{
    try {
        const result = await axios.post('/user/login', user);
        const token = result.data.token;
        localStorage.setItem('token', token)
        if (result.data.error) return dispatch({
                type: Types.SET_ALERT,
                payload:{
                    message: result.data.message,
                    error: true
                }
        })
        dispatch({
                type: Types.SET_ALERT,
                payload:{
                    message: result.data.message,
                    error: result.data.error
                }
        })
        
        const decode = jwt(token)
        const res = await axios.get(`/user/single-user/${decode._id}`,{
            headers:{
                authorization: token
            }
        });
        if (res.data.data) {
            dispatch({
                type: Types.SET_USER,
                payload:{
                    auth: true,
                    user:res.data.data[0],
                    token: token
                }
            })
        }
        history.push('/');
    } catch (error) {
        console.log(error);
        dispatch({
                type: Types.SET_ALERT,
                payload:{
                    message: 'server side error',
                    error: true
                }
        })
    }
}

export const logoutAction = () => dispatch =>{
    const token = localStorage.getItem('token')
    if (token) {
        localStorage.removeItem('token');
    }
    dispatch({
            type: Types.SET_USER,
            payload:{
                auth: false,
                user:{},
                token: ''
            }
        })
}