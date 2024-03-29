export const BACKEND_URL
    = window.location.hostname === "localhost"
    || window.location.hostname === "127.0.01"
    || window.location.hostname === ""
    ? "http://localhost:5000"
    : "https://api.terkaberedavida.cz";
export const API_URL = BACKEND_URL + "/api";
export const PUBLIC_URL = API_URL + "/public"
export const PRIVATE_URL = API_URL + "/private"
export const AUTH_URL = PUBLIC_URL + "/auth";
export const LOGIN_URL = AUTH_URL + "/sign-in";
export const GUEST_URL = PRIVATE_URL + "/guests"
export const TABLE_URL = PRIVATE_URL + "/tables";
export const ROOM_URL = PRIVATE_URL + "/rooms";
export const AVAILABLE_ROOM_URL = ROOM_URL + "/statistics/available"
export const AUDIT_URL = PRIVATE_URL + "/audit";
export const STATISTICS_URL = PRIVATE_URL + "/statistics";
export const STATISTICS_RSVP_ANSWERED_URL = STATISTICS_URL + "/rsvpanswered";
export const STATISTICS_RSVP_UNANSWERED_URL = STATISTICS_URL + "/rsvpunanswered";
export const STATISTICS_ACCOMMODATION_ACCEPTED_URL = STATISTICS_URL + "/accommodationaccepted";
export const STATISTICS_ACCOMMODATION_DECLINED_URL = STATISTICS_URL + "/accommodationdeclined";
export const STATISTICS_BEER_DRINKERS_URL = STATISTICS_URL + "/beerdrinkers";
export const STATISTICS_WINE_DRINKERS_URL = STATISTICS_URL + "/winedrinkers";
export const STATISTICS_GUESTS_WITH_ROOM_URL = STATISTICS_URL + "/guestswithroom";
export const STATISTICS_GUESTS_WITHOUT_ROOM_URL = STATISTICS_URL + "/guestswithoutroom";
