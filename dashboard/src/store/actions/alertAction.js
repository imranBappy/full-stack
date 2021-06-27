import * as Types from './types';

export const alertAction = alert => dispatch =>{
    console.log(alert);
    dispatch({
        type: Types.SET_ALERT,
        payload: alert
    })
}