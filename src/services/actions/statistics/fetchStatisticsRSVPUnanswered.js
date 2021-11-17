import axios from "axios";
import {STATISTICS_RSVP_UNANSWERED_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_RSVP_UNANSWERED_BEGIN_REQUEST = "FETCH_STATISTICS_RSVP_UNANSWERED_BEGIN_REQUEST";
export const FETCH_STATISTICS_RSVP_UNANSWERED_SUCCESS = "FETCH_STATISTICS_RSVP_UNANSWERED_SUCCESS";
export const FETCH_STATISTICS_RSVP_UNANSWERED_ERROR = "FETCH_STATISTICS_RSVP_UNANSWERED_ERROR";

export const fetchStatisticsRSVPUnanswered = () => (dispatch, getState) => {
    if (canFetchStatisticsRSVPUnanswered(getState())) {
        dispatch(fetchStatisticsRSVPUnansweredRequest());
        return axios.get(STATISTICS_RSVP_UNANSWERED_URL)
            .then(json => dispatch(fetchStatisticsRSVPUnansweredSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsRSVPUnansweredError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsRSVPUnanswered = (state) => {
    return state.fetchStatisticsRSVPUnanswered.isReady;
}

const fetchStatisticsRSVPUnansweredRequest = () => ({
    type: FETCH_STATISTICS_RSVP_UNANSWERED_BEGIN_REQUEST
})

const fetchStatisticsRSVPUnansweredSuccess = (data) => ({
    type: FETCH_STATISTICS_RSVP_UNANSWERED_SUCCESS,
    data: data
})

const fetchStatisticsRSVPUnansweredError = message => ({
    type: FETCH_STATISTICS_RSVP_UNANSWERED_ERROR,
    message: message
})
