import * as Types from './types';
import axios from 'axios';

export const adminAddAction = (admin) => async dispatch => {
    try {
        const res = await axios.post(`/admin/add`, admin);
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: res.data.message,
                error: res.data.error
            }
        });
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:'Server side error'
        })
    }
};

export const loadAdminAction = () => async dispatch => {
    try {
        const admin = await axios.get(`/admin/all-admin`);
        dispatch({
            type: Types.SET_ADMIN,
            payload:{
                admin: admin.data.data
            }
        });
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload:'Server side error'
        })
    }
}