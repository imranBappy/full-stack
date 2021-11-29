import axios from 'axios';
import * as Types from './types';

export const getUserAction = page => async dispatch =>{
    try {
        console.log({page});
        const user = await axios.get(`https://b24win.herokuapp.com/user?page=${page}`);
        console.log(user.data.users);
        if (user.data) {
            dispatch({
                type: Types.SET_USER,
                payload:{
                    user: user.data.users,
                    length: user.data.length
                }
            })
        }
        
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server side error',
                error: true
            }
        })
    }
}
export const userActiveAction = (user , index, users, length)=> async dispatch =>{
    try {
        const res = await axios.patch(`https://b24win.herokuapp.com/user/update-user`, user);
        if (res.data.error) return dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: res.data.error
            }
        });

        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: res.data.error
            }
        });
        users.splice(index, 1, res.data.user, )
        dispatch({
            type: Types.SET_USER,
            payload:{
                user: users,
                length
            }
        });

        
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Server side error',
                error: true
            }
        })
    }
}