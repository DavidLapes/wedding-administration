import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const CREATE_GUEST_BEGIN_REQUEST = "CREATE_GUEST_BEGIN_REQUEST";
export const CREATE_GUEST_SUCCESS = "CREATE_GUEST_SUCCESS";
export const CREATE_GUEST_ERROR = "CREATE_GUEST_ERROR";

export const createGuest = (guest) => (dispatch, getState) => {
    if(canCreateGuest(getState())) {
        dispatch(createGuestRequest());
        return axios.post(GUEST_URL, guest)
            .then(json => dispatch(createGuestSuccess(json.data)))
            .catch(err => dispatch(createGuestError(getExceptionResponseMessage(err))))
    }
}

const canCreateGuest = (state) => {
    return state.createGuest.isReady;
}

const createGuestRequest = () => ({
    type: CREATE_GUEST_BEGIN_REQUEST
})

const createGuestSuccess = (data) => ({
    type: CREATE_GUEST_SUCCESS,
    data: data
})

const createGuestError = message => ({
    type: CREATE_GUEST_ERROR,
    message: message
})
