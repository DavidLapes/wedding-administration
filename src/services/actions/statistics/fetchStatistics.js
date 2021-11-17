import axios from "axios";
import {STATISTICS_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_BEGIN_REQUEST = "FETCH_STATISTICS_BEGIN_REQUEST";
export const FETCH_STATISTICS_SUCCESS = "FETCH_STATISTICS_SUCCESS";
export const FETCH_STATISTICS_ERROR = "FETCH_STATISTICS_ERROR";

export const fetchStatistics = () => (dispatch, getState) => {
    if (canFetchStatistics(getState())) {
        dispatch(fetchStatisticsRequest());
        return axios.get(STATISTICS_URL)
            .then(json => dispatch(fetchStatisticsSuccess(json.data)))
            .catch(err => dispatch(fetchStatisticsError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatistics = (state) => {
    return state.fetchStatistics.isReady;
}

const fetchStatisticsRequest = () => ({
    type: FETCH_STATISTICS_BEGIN_REQUEST
})

const fetchStatisticsSuccess = (data) => ({
    type: FETCH_STATISTICS_SUCCESS,
    data: data
})

const fetchStatisticsError = message => ({
    type: FETCH_STATISTICS_ERROR,
    message: message
})
