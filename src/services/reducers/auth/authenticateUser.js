import {isAuthenticated} from "../../auth/auth";
import {auth} from "../../actions/index";
import {showErrorPopup} from "../../popups/popup";

const initialAuthenticationState = {
    isAuthenticated: isAuthenticated(),
    isReady: true
};

export function authenticationReducer(state = initialAuthenticationState, action) {
    switch (action.type) {
        case auth.LOGIN_USER_SAVE_TOKEN:
            localStorage.setItem("user", JSON.stringify(action.token));
            return state;
        case auth.LOGIN_USER_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case auth.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isReady: true,
                isAuthenticated: true
            }
        case auth.LOGIN_USER_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        case auth.LOGOUT_USER_REMOVE_TOKEN:
            localStorage.removeItem("user");
            return state;
        case auth.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}
