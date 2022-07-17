import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'

import {authenticationReducer} from "./auth/authenticateUser";

import {fetchAuditsReducer} from "./audits/fetchAudits";

import {createGuestReducer} from "./guests/createGuest";
import {fetchGuestDetailReducer} from "./guests/fetchGuestDetail";
import {fetchGuestsReducer} from "./guests/fetchGuests";
import {editGuestReducer} from "./guests/editGuest";
import {assignRoomToGuestReducer} from "./guests/assignRoomToGuest";
import {deleteGuestReducer} from "./guests/deleteGuest";

import {createRoomReducer} from "./rooms/createRoom";
import {fetchRoomDetailReducer} from "./rooms/fetchRoomDetail";
import {fetchRoomsReducer} from "./rooms/fetchRooms";
import {editRoomReducer} from "./rooms/editRoom";
import {deleteRoomReducer} from "./rooms/deleteRoom";
import {fetchAvailableRoomsReducer} from "./rooms/fetchAvailableRooms";

import {createTableReducer} from "./tables/createTable";
import {fetchTableDetailReducer} from "./tables/fetchTableDetail";
import {fetchTablesReducer} from "./tables/fetchTables";
import {deleteTableReducer} from "./tables/deleteTable";

import {fetchStatisticsReducer} from "./statistics/fetchStatistics";
import {fetchStatisticsRSVPAnsweredReducer} from "./statistics/fetchStatisticsRSVPAnswered";
import {fetchStatisticsRSVPUnansweredReducer} from "./statistics/fetchStatisticsRSVPUnanswered";
import {fetchStatisticsAccommodationAcceptedReducer} from "./statistics/fetchStatisticsAccommodationAccepted";
import {fetchStatisticsAccommodationDeclinedReducer} from "./statistics/fetchStatisticsAccommodationDeclined";
import {fetchStatisticsBeerDrinkersReducer} from "./statistics/fetchStatisticsBeerDrinkers";
import {fetchStatisticsWineDrinkersReducer} from "./statistics/fetchStatisticsWineDrinkers";
import {fetchStatisticsGuestsWithRoomReducer} from "./statistics/fetchStatisticsGuestsWithRoom";
import {fetchStatisticsGuestsWithoutRoomReducer} from "./statistics/fetchStatisticsGuestsWithoutRoom";

const reducers = (history) => combineReducers({
    auth: authenticationReducer,

    fetchAudits: fetchAuditsReducer,

    createGuest: createGuestReducer,
    fetchGuestsDetails: fetchGuestDetailReducer,
    fetchGuests: fetchGuestsReducer,
    assignRoomToGuest: assignRoomToGuestReducer,
    editGuest: editGuestReducer,
    deleteGuest: deleteGuestReducer,

    createRoom: createRoomReducer,
    fetchRoomsDetails: fetchRoomDetailReducer,
    fetchRooms: fetchRoomsReducer,
    fetchAvailableRooms: fetchAvailableRoomsReducer,
    editRoom: editRoomReducer,
    deleteRoom: deleteRoomReducer,

    createTable: createTableReducer,
    fetchTablesDetails: fetchTableDetailReducer,
    fetchTables: fetchTablesReducer,
    deleteTable: deleteTableReducer,

    fetchStatistics: fetchStatisticsReducer,
    fetchStatisticsRSVPAnswered: fetchStatisticsRSVPAnsweredReducer,
    fetchStatisticsRSVPUnanswered: fetchStatisticsRSVPUnansweredReducer,
    fetchStatisticsAccommodationAccepted: fetchStatisticsAccommodationAcceptedReducer,
    fetchStatisticsAccommodationDeclined: fetchStatisticsAccommodationDeclinedReducer,
    fetchStatisticsBeerDrinkers: fetchStatisticsBeerDrinkersReducer,
    fetchStatisticsWineDrinkers: fetchStatisticsWineDrinkersReducer,
    fetchStatisticsGuestsWithRoom: fetchStatisticsGuestsWithRoomReducer,
    fetchStatisticsGuestsWithoutRoom: fetchStatisticsGuestsWithoutRoomReducer,

    router: connectRouter(history)
})

export default reducers;
