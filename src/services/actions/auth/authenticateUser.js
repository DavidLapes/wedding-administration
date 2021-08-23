import axios from "axios";
import {LOGIN_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_REMOVE_TOKEN = "LOGOUT_USER_REMOVE_TOKEN";

export const LOGIN_USER_BEGIN_REQUEST = "LOGIN_USER_BEGIN_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOGIN_USER_SAVE_TOKEN = "LOGIN_USER_SAVE_TOKEN";

export const login = user => (dispatch, getState) => {
    if (canLogin(getState())) {
        dispatch(loginBeginRequest());
        return axios.post(LOGIN_URL, user)
            .then(json => dispatch(saveToken(json.data)))
            .then(() => dispatch(loginSuccess()))
            .catch(err => dispatch(loginError(getExceptionResponseMessage(err))))
    }
}

const canLogin = (state) => {
    return state.auth.isReady;
}

const loginBeginRequest = () => ({
    type: LOGIN_USER_BEGIN_REQUEST
})

const loginSuccess = () => ({
    type: LOGIN_USER_SUCCESS
})

const loginError = message => ({
    type: LOGIN_USER_ERROR,
    message: message
})

const saveToken = token => ({
    type: LOGIN_USER_SAVE_TOKEN,
    token: token
})

export const logout = () => dispatch => {
    dispatch(removeToken());
    dispatch(logoutUser());
}

const logoutUser = () => ({
    type: LOGOUT_USER
})

const removeToken = () => ({
    type: LOGOUT_USER_REMOVE_TOKEN
})


