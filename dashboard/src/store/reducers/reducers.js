import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { alertReducer } from './alertReducer';
import authReducer from "./authReducer";
import betReducer from "./betReducer";
import clubReducer from "./clubReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";
import depositReducer from "./depositReducer";
import userBetReducer from './userBetReducer';
import withReducer from './withReducer';


const reducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    game: gameReducer,
    user: userReducer,
    bet: betReducer,
    club: clubReducer,
    admin: adminReducer,
    deposit: depositReducer,
    userBet: userBetReducer,
    withdraw:withReducer
})

export default reducers
