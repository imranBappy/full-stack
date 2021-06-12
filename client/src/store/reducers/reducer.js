import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
const { combineReducers } = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
})

export default reducer
