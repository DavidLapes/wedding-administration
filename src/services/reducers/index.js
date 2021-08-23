import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import {authenticationReducer} from "./auth/authenticateUser";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,
    router: connectRouter(history)
})

export default reducers;
