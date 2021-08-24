import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_GUEST_DETAIL_BEGIN_REQUEST = "FETCH_GUEST_DETAIL_BEGIN_REQUEST";
export const FETCH_GUEST_DETAIL_SUCCESS = "FETCH_GUEST_DETAIL_SUCCESS";
export const FETCH_GUEST_DETAIL_ERROR = "FETCH_GUEST_DETAIL_ERROR";

export const fetchGuestDetail = (id) => (dispatch, getState) => {
    if(canFetchGuest(getState())) {
        dispatch(fetchGuestDetailRequest());
        return axios.get(GUEST_URL + "/" + id)
            .then(json => dispatch(fetchGuestDetailSuccess(json.data)))
            .catch(err => dispatch(fetchGuestDetailError(getExceptionResponseMessage(err))))
    }
}

const canFetchGuest = (state) => {
    return state.fetchGuestsDetails.isReady;
}

const fetchGuestDetailRequest = () => ({
    type: FETCH_GUEST_DETAIL_BEGIN_REQUEST
})

const fetchGuestDetailSuccess = (data) => ({
    type: FETCH_GUEST_DETAIL_SUCCESS,
    data: data
})

const fetchGuestDetailError = message => ({
    type: FETCH_GUEST_DETAIL_ERROR,
    message: message
})
