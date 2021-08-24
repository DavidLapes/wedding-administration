import * as auth from "./auth/authenticateUser";

import * as createGuest from "./guests/createGuest";
import * as fetchGuestDetail from "./guests/fetchGuestDetail";
import * as fetchGuests from "./guests/fetchGuests";
import * as deleteGuest from "./guests/deleteGuest";

import * as createTable from "./tables/createTable";
import * as fetchTableDetail from "./tables/fetchTableDetail";
import * as fetchTables from "./tables/fetchTables";
import * as deleteTable from "./tables/deleteTable";

export {
    auth,
    createGuest, fetchGuestDetail, fetchGuests, deleteGuest,
    createTable, fetchTableDetail, fetchTables, deleteTable
}
