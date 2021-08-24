import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import {authenticationReducer} from "./auth/authenticateUser";
import {createGuestReducer} from "./guests/createGuest";
import {fetchGuestDetailReducer} from "./guests/fetchGuestDetail";
import {fetchGuestsReducer} from "./guests/fetchGuests";
import {deleteGuestReducer} from "./guests/deleteGuest";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,
    createGuest: createGuestReducer,
    fetchGuestsDetails: fetchGuestDetailReducer,
    fetchGuests: fetchGuestsReducer,
    deleteGuest: deleteGuestReducer,
    router: connectRouter(history)
})

export default reducers;
