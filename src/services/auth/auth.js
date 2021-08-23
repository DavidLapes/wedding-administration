export function isAuthenticated() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    return currentUser !== null && currentUser.token !== null;
}
