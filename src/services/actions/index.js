import * as auth from "./auth/authenticateUser";

import * as fetchAudits from "./audit/fetchAudits";

import * as createGuest from "./guests/createGuest";
import * as fetchGuestDetail from "./guests/fetchGuestDetail";
import * as fetchGuests from "./guests/fetchGuests";
import * as editGuest from "./guests/editGuest";
import * as assignRoomToGuest from "./guests/assignRoomToGuest";
import * as deleteGuest from "./guests/deleteGuest";

import * as createRoom from "./rooms/createRoom";
import * as fetchRoomDetail from "./rooms/fetchRoomDetail";
import * as fetchRooms from "./rooms/fetchRooms";
import * as fetchAvailableRooms from "./rooms/fetchAvailableRooms";
import * as editRoom from "./rooms/editRoom";
import * as deleteRoom from "./rooms/deleteRoom";

import * as createTable from "./tables/createTable";
import * as fetchTableDetail from "./tables/fetchTableDetail";
import * as fetchTables from "./tables/fetchTables";
import * as deleteTable from "./tables/deleteTable";

import * as fetchStatistics from "./statistics/fetchStatistics";
import * as fetchStatisticsRSVPAnswered from "./statistics/fetchStatisticsRSVPAnswered";
import * as fetchStatisticsRSVPUnanswered from "./statistics/fetchStatisticsRSVPUnanswered";
import * as fetchStatisticsAccommodationAccepted from "./statistics/fetchStatisticsAccommodationAccepted";
import * as fetchStatisticsAccommodationDeclined from "./statistics/fetchStatisticsAccommodationDeclined";
import * as fetchStatisticsBeerDrinkers from "./statistics/fetchStatisticsBeerDrinkers";
import * as fetchStatisticsWineDrinkers from "./statistics/fetchStatisticsWineDrinkers";
import * as fetchStatisticsGuestsWithRoom from "./statistics/fetchStatisticsGuestsWithRoom";
import * as fetchStatisticsGuestsWithoutRoom from "./statistics/fetchStatisticsGuestsWithoutRoom";

export {
    auth,
    fetchAudits,
    createGuest, fetchGuestDetail, fetchGuests, editGuest, assignRoomToGuest, deleteGuest,
    createRoom, fetchRoomDetail, fetchRooms, fetchAvailableRooms, editRoom, deleteRoom,
    createTable, fetchTableDetail, fetchTables, deleteTable,
    fetchStatistics, fetchStatisticsRSVPAnswered, fetchStatisticsRSVPUnanswered,
    fetchStatisticsAccommodationAccepted, fetchStatisticsAccommodationDeclined,
    fetchStatisticsBeerDrinkers, fetchStatisticsWineDrinkers,
    fetchStatisticsGuestsWithRoom, fetchStatisticsGuestsWithoutRoom
}
