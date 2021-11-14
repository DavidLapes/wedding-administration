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
export const GUEST_URL = PRIVATE_URL + "/guests";
export const TABLE_URL = PRIVATE_URL + "/tables";
export const AUDIT_URL = PRIVATE_URL + "/audit";
