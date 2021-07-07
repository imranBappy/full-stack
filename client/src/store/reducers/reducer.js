import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import clubReducer from "./clubReducer";
import gameReducer from './gameReducer';
import betReducer from './betReducer';
import tractionReducer from './tractionReducer';
const { combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    club: clubReducer,
    game: gameReducer,
    bet: betReducer,
    transaction: tractionReducer
})

export default reducer
