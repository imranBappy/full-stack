import * as Types from './types';
import axios from 'axios';

export const adminAddAction = (admin) => async dispatch => {
    try {
        const res = await axios.post(`https://server.hosttesting.xyz/admin/add`, admin);
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
            payload:{
                message: 'Server was a side error',
                error: true
            }
        })
    }
};

export const loadAdminAction = () => async dispatch => {
    try {
        const admin = await axios.get(`https://server.hosttesting.xyz/admin/all-admin`);
        dispatch({
            type: Types.SET_ADMIN,
            payload:{
                admin: admin.data.data
            }
        });
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

export const adminDeleteAction = (admin,) => async dispatch => {
    try {
        const res = await axios.delete(`https://server.hosttesting.xyz/admin/delete?_id=${admin._id}`);
        dispatch({
            type: Types.SET_ADMIN,
            payload:{
                admin: res.data.data
            }
        });
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Admin Successfully deleted',
                error: false
            }
        })

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

export const adminEditAction = (admin) => async dispatch => {
    try {
        const res = await axios.put(`https://server.hosttesting.xyz/admin/change?_id=${admin._id}&admin=${admin.isAdmin? 0 : 1}`);
        dispatch({
            type: Types.SET_ADMIN,
            payload:{
                admin: res.data.data
            }
        });
        dispatch({
            type: Types.SET_ALERT,
            payload:{
                message: 'Admin Successfully deleted',
                error: false
            }
        })

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