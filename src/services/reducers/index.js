import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'

import {authenticationReducer} from "./auth/authenticateUser";

import {fetchAuditsReducer} from "./audits/fetchAudits";

import {createGuestReducer} from "./guests/createGuest";
import {fetchGuestDetailReducer} from "./guests/fetchGuestDetail";
import {fetchGuestsReducer} from "./guests/fetchGuests";
import {editGuestReducer} from "./guests/editGuest";
import {deleteGuestReducer} from "./guests/deleteGuest";

import {createTableReducer} from "./tables/createTable";
import {fetchTableDetailReducer} from "./tables/fetchTableDetail";
import {fetchTablesReducer} from "./tables/fetchTables";
import {deleteTableReducer} from "./tables/deleteTable";

import {fetchStatisticsReducer} from "./statistics/fetchStatistics";
import {fetchStatisticsRSVPAnsweredReducer} from "./statistics/fetchStatisticsRSVPAnswered";
import {fetchStatisticsRSVPUnansweredReducer} from "./statistics/fetchStatisticsRSVPUnanswered";
import {fetchStatisticsAccommodationAcceptedReducer} from "./statistics/fetchStatisticsAccommodationAccepted";
import {fetchStatisticsAccommodationDeclinedReducer} from "./statistics/fetchStatisticsAccommodationDeclined";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,

    fetchAudits: fetchAuditsReducer,

    createGuest: createGuestReducer,
    fetchGuestsDetails: fetchGuestDetailReducer,
    fetchGuests: fetchGuestsReducer,
    editGuest: editGuestReducer,
    deleteGuest: deleteGuestReducer,

    createTable: createTableReducer,
    fetchTablesDetails: fetchTableDetailReducer,
    fetchTables: fetchTablesReducer,
    deleteTable: deleteTableReducer,

    fetchStatistics: fetchStatisticsReducer,
    fetchStatisticsRSVPAnswered: fetchStatisticsRSVPAnsweredReducer,
    fetchStatisticsRSVPUnanswered: fetchStatisticsRSVPUnansweredReducer,
    fetchStatisticsAccommodationAccepted: fetchStatisticsAccommodationAcceptedReducer,
    fetchStatisticsAccommodationDeclined: fetchStatisticsAccommodationDeclinedReducer,

    router: connectRouter(history)
})

export default reducers;
