import axios from "axios";
import {STATISTICS_RSVP_ANSWERED_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_RSVP_ANSWERED_BEGIN_REQUEST = "FETCH_STATISTICS_RSVP_ANSWERED_BEGIN_REQUEST";
export const FETCH_STATISTICS_RSVP_ANSWERED_SUCCESS = "FETCH_STATISTICS_RSVP_ANSWERED_SUCCESS";
export const FETCH_STATISTICS_RSVP_ANSWERED_ERROR = "FETCH_STATISTICS_RSVP_ANSWERED_ERROR";

export const fetchStatisticsRSVPAnswered = () => (dispatch, getState) => {
    if (canFetchStatisticsRSVPAnswered(getState())) {
        dispatch(fetchStatisticsRSVPAnsweredRequest());
        return axios.get(STATISTICS_RSVP_ANSWERED_URL)
            .then(json => dispatch(fetchStatisticsRSVPAnsweredSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsRSVPAnsweredError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsRSVPAnswered = (state) => {
    return state.fetchStatisticsRSVPAnswered.isReady;
}

const fetchStatisticsRSVPAnsweredRequest = () => ({
    type: FETCH_STATISTICS_RSVP_ANSWERED_BEGIN_REQUEST
})

const fetchStatisticsRSVPAnsweredSuccess = (data) => ({
    type: FETCH_STATISTICS_RSVP_ANSWERED_SUCCESS,
    data: data
})

const fetchStatisticsRSVPAnsweredError = message => ({
    type: FETCH_STATISTICS_RSVP_ANSWERED_ERROR,
    message: message
})
