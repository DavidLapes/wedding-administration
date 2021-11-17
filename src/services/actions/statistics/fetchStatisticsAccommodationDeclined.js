import axios from "axios";
import {STATISTICS_ACCOMMODATION_DECLINED_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_ACCOMMODATION_DECLINED_BEGIN_REQUEST = "FETCH_STATISTICS_ACCOMMODATION_DECLINED_BEGIN_REQUEST";
export const FETCH_STATISTICS_ACCOMMODATION_DECLINED_SUCCESS = "FETCH_STATISTICS_ACCOMMODATION_DECLINED_SUCCESS";
export const FETCH_STATISTICS_ACCOMMODATION_DECLINED_ERROR = "FETCH_STATISTICS_ACCOMMODATION_DECLINED_ERROR";

export const fetchStatisticsAccommodationDeclined = () => (dispatch, getState) => {
    if (canFetchStatisticsAccommodationDeclined(getState())) {
        dispatch(fetchStatisticsAccommodationDeclinedRequest());
        return axios.get(STATISTICS_ACCOMMODATION_DECLINED_URL)
            .then(json => dispatch(fetchStatisticsAccommodationDeclinedSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsAccommodationDeclinedError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsAccommodationDeclined = (state) => {
    return state.fetchStatisticsAccommodationDeclined.isReady;
}

const fetchStatisticsAccommodationDeclinedRequest = () => ({
    type: FETCH_STATISTICS_ACCOMMODATION_DECLINED_BEGIN_REQUEST
})

const fetchStatisticsAccommodationDeclinedSuccess = (data) => ({
    type: FETCH_STATISTICS_ACCOMMODATION_DECLINED_SUCCESS,
    data: data
})

const fetchStatisticsAccommodationDeclinedError = message => ({
    type: FETCH_STATISTICS_ACCOMMODATION_DECLINED_ERROR,
    message: message
})
