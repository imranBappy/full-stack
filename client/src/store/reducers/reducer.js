import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import clubReducer from "./clubReducer";
const { combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    club: clubReducer
})

export default reducer
