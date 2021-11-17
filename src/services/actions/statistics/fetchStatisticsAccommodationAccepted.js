import axios from "axios";
import {STATISTICS_ACCOMMODATION_ACCEPTED_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_BEGIN_REQUEST = "FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_BEGIN_REQUEST";
export const FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_SUCCESS = "FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_SUCCESS";
export const FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_ERROR = "FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_ERROR";

export const fetchStatisticsAccommodationAccepted = () => (dispatch, getState) => {
    if (canFetchStatisticsAccommodationAccepted(getState())) {
        dispatch(fetchStatisticsAccommodationAcceptedRequest());
        return axios.get(STATISTICS_ACCOMMODATION_ACCEPTED_URL)
            .then(json => dispatch(fetchStatisticsAccommodationAcceptedSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsAccommodationAcceptedError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsAccommodationAccepted = (state) => {
    return state.fetchStatisticsAccommodationAccepted.isReady;
}

const fetchStatisticsAccommodationAcceptedRequest = () => ({
    type: FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_BEGIN_REQUEST
})

const fetchStatisticsAccommodationAcceptedSuccess = (data) => ({
    type: FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_SUCCESS,
    data: data
})

const fetchStatisticsAccommodationAcceptedError = message => ({
    type: FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_ERROR,
    message: message
})
