import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {fetchGuests} from "./fetchGuests";

export const DELETE_GUEST_BEGIN_REQUEST = "DELETE_GUEST_BEGIN_REQUEST";
export const DELETE_GUEST_SUCCESS = "DELETE_GUEST_SUCCESS";
export const DELETE_GUEST_ERROR = "DELETE_GUEST_ERROR";

export const deleteGuest = (id) => (dispatch, getState) => {
    if(canDeleteGuest(getState())) {
        dispatch(deleteGuestRequest());
        return axios.delete(GUEST_URL + "/" + id)
            .then(json => {
                dispatch(deleteGuestSuccess(json.data));
                dispatch(fetchGuests());
            })
            .catch(err => dispatch(deleteGuestError(getExceptionResponseMessage(err))))
    }
}

const canDeleteGuest = (state) => {
    return state.deleteGuest.isReady;
}

const deleteGuestRequest = () => ({
    type: DELETE_GUEST_BEGIN_REQUEST
})

const deleteGuestSuccess = (data) => ({
    type: DELETE_GUEST_SUCCESS,
    data: data
})

const deleteGuestError = message => ({
    type: DELETE_GUEST_ERROR,
    message: message
})
