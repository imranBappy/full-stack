import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import clubReducer from "./clubReducer";
import gameReducer from './gameReducer';
import betReducer from './betReducer';

const { combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    club: clubReducer,
    game: gameReducer,
    bet: betReducer
})

export default reducer
