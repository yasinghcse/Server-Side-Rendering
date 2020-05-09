import {combineReducers} from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import adminReducers from "./adminReducers";

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminReducers
});