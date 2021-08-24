import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'

import {authenticationReducer} from "./auth/authenticateUser";

import {createGuestReducer} from "./guests/createGuest";
import {fetchGuestDetailReducer} from "./guests/fetchGuestDetail";
import {fetchGuestsReducer} from "./guests/fetchGuests";
import {deleteGuestReducer} from "./guests/deleteGuest";

import {createTableReducer} from "./tables/createTable";
import {fetchTableDetailReducer} from "./tables/fetchTableDetail";
import {fetchTablesReducer} from "./tables/fetchTables";
import {deleteTableReducer} from "./tables/deleteTable";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,

    createGuest: createGuestReducer,
    fetchGuestsDetails: fetchGuestDetailReducer,
    fetchGuests: fetchGuestsReducer,
    deleteGuest: deleteGuestReducer,

    createTable: createTableReducer,
    fetchTablesDetails: fetchTableDetailReducer,
    fetchTables: fetchTablesReducer,
    deleteTable: deleteTableReducer,

    router: connectRouter(history)
})

export default reducers;
