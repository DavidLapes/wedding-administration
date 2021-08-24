import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import {authenticationReducer} from "./auth/authenticateUser";
import {createGuestReducer} from "./guests/createGuest";
import {fetchGuestDetailReducer} from "./guests/fetchGuestDetail";
import {fetchGuestsReducer} from "./guests/fetchGuests";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,
    createGuest: createGuestReducer,
    fetchGuestsDetails: fetchGuestDetailReducer,
    fetchGuests: fetchGuestsReducer,
    router: connectRouter(history)
})

export default reducers;
