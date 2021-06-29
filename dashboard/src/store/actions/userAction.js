import axios from 'axios';
import * as Types from './types';

export const getUserAction = page => async dispatch =>{
    try {
        const user = await axios.get(`/user/?page=${page}`);
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
                type: Types.SET_USER,
                payload:{
                    user: []
                }
            })
    }
}
 