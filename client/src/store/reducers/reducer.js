import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import clubReducer from "./clubReducer";
import gameReducer from './gameReducer';
import betReducer from './betReducer';
import TransactionReducer from './TransactionReducer';
const { combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    club: clubReducer,
    game: gameReducer,
    bet: betReducer,
    transaction: TransactionReducer
})

export default reducer
