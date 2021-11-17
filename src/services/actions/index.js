import * as auth from "./auth/authenticateUser";

import * as fetchAudits from "./audit/fetchAudits";

import * as createGuest from "./guests/createGuest";
import * as fetchGuestDetail from "./guests/fetchGuestDetail";
import * as fetchGuests from "./guests/fetchGuests";
import * as editGuest from "./guests/editGuest";
import * as deleteGuest from "./guests/deleteGuest";

import * as createTable from "./tables/createTable";
import * as fetchTableDetail from "./tables/fetchTableDetail";
import * as fetchTables from "./tables/fetchTables";
import * as deleteTable from "./tables/deleteTable";

export {
    auth,
    fetchAudits,
    createGuest, fetchGuestDetail, fetchGuests, editGuest, deleteGuest,
    createTable, fetchTableDetail, fetchTables, deleteTable
}
