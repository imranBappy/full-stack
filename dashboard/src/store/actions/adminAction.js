import * as Types from './types';
import axios from 'axios';

export const adminAction = (admin) => async dispatch => {
    try {
        const res = await axios.post(`/admin/add`, admin);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
