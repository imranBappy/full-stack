import { combineReducers } from "redux";
import { alertReducer } from './alertReducer';
import authReducer from "./authReducer";
import betReducer from "./betReducer";
import clubReducer from "./clubReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    game: gameReducer,
    user: userReducer,
    bet: betReducer,
    club: clubReducer
})

export default reducers
