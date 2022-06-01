import axios from "axios";
import {STATISTICS_WINE_DRINKERS_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_WINE_DRINKERS_BEGIN_REQUEST = "FETCH_STATISTICS_WINE_DRINKERS_BEGIN_REQUEST";
export const FETCH_STATISTICS_WINE_DRINKERS_SUCCESS = "FETCH_STATISTICS_WINE_DRINKERS_SUCCESS";
export const FETCH_STATISTICS_WINE_DRINKERS_ERROR = "FETCH_STATISTICS_WINE_DRINKERS_ERROR";

export const fetchStatisticsWineDrinkers = () => (dispatch, getState) => {
    if (canFetchStatisticsWineDrinkers(getState())) {
        dispatch(fetchStatisticsWineDrinkersRequest());
        return axios.get(STATISTICS_WINE_DRINKERS_URL)
            .then(json => dispatch(fetchStatisticsWineDrinkersSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsWineDrinkersError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsWineDrinkers = (state) => {
    return state.fetchStatisticsWineDrinkers.isReady;
}

const fetchStatisticsWineDrinkersRequest = () => ({
    type: FETCH_STATISTICS_WINE_DRINKERS_BEGIN_REQUEST
})

const fetchStatisticsWineDrinkersSuccess = (data) => ({
    type: FETCH_STATISTICS_WINE_DRINKERS_SUCCESS,
    data: data
})

const fetchStatisticsWineDrinkersError = message => ({
    type: FETCH_STATISTICS_WINE_DRINKERS_ERROR,
    message: message
})
