import axios from "axios";
import {AUDIT_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_AUDIT_BEGIN_REQUEST = "FETCH_AUDIT_BEGIN_REQUEST";
export const FETCH_AUDIT_SUCCESS = "FETCH_AUDIT_SUCCESS";
export const FETCH_AUDIT_ERROR = "FETCH_AUDIT_ERROR";

export const fetchAudits = () => (dispatch, getState) => {
    if (canFetchAudits(getState())) {
        dispatch(fetchAuditsRequest());
        return axios.get(AUDIT_URL)
            .then(json => dispatch(fetchAuditsSuccess(json.data.data)))
            .catch(err => dispatch(fetchAuditsError(getExceptionResponseMessage(err))))
    }
}

const canFetchAudits = (state) => {
    return state.fetchAudits.isReady;
}

const fetchAuditsRequest = () => ({
    type: FETCH_AUDIT_BEGIN_REQUEST
})

const fetchAuditsSuccess = (data) => ({
    type: FETCH_AUDIT_SUCCESS,
    data: data
})

const fetchAuditsError = message => ({
    type: FETCH_AUDIT_ERROR,
    message: message
})
