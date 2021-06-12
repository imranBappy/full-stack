import { combineReducers } from "redux";
import { alertReducer } from './alertReducer';
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

const reduxers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    game: gameReducer,
    user: userReducer
})

export default reduxers
