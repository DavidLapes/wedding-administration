import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {push} from "connected-react-router";

export const EDIT_GUEST_BEGIN_REQUEST = "EDIT_GUEST_BEGIN_REQUEST";
export const EDIT_GUEST_SUCCESS = "EDIT_GUEST_SUCCESS";
export const EDIT_GUEST_ERROR = "EDIT_GUEST_ERROR";

export const editGuest = (id, guest) => (dispatch, getState) => {
    if(canEditGuest(getState())) {
        dispatch(editGuestRequest());
        return axios.put(GUEST_URL + "/" + id, guest)
            .then(json => {
                dispatch(editGuestSuccess(json.data));
                dispatch(push("/guests/" + json.data.id))
            })
            .catch(err => dispatch(editGuestError(getExceptionResponseMessage(err))))
    }
}

const canEditGuest = (state) => {
    return state.editGuest.isReady;
}

const editGuestRequest = () => ({
    type: EDIT_GUEST_BEGIN_REQUEST
})

const editGuestSuccess = (data) => ({
    type: EDIT_GUEST_SUCCESS,
    data: data
})

const editGuestError = message => ({
    type: EDIT_GUEST_ERROR,
    message: message
})
