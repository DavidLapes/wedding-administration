import axios from "axios";
import {STATISTICS_BEER_DRINKERS_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_BEER_DRINKERS_BEGIN_REQUEST = "FETCH_STATISTICS_BEER_DRINKERS_BEGIN_REQUEST";
export const FETCH_STATISTICS_BEER_DRINKERS_SUCCESS = "FETCH_STATISTICS_BEER_DRINKERS_SUCCESS";
export const FETCH_STATISTICS_BEER_DRINKERS_ERROR = "FETCH_STATISTICS_BEER_DRINKERS_ERROR";

export const fetchStatisticsBeerDrinkers = () => (dispatch, getState) => {
    if (canFetchStatisticsBeerDrinkers(getState())) {
        dispatch(fetchStatisticsBeerDrinkersRequest());
        return axios.get(STATISTICS_BEER_DRINKERS_URL)
            .then(json => dispatch(fetchStatisticsBeerDrinkersSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsBeerDrinkersError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsBeerDrinkers = (state) => {
    return state.fetchStatisticsBeerDrinkers.isReady;
}

const fetchStatisticsBeerDrinkersRequest = () => ({
    type: FETCH_STATISTICS_BEER_DRINKERS_BEGIN_REQUEST
})

const fetchStatisticsBeerDrinkersSuccess = (data) => ({
    type: FETCH_STATISTICS_BEER_DRINKERS_SUCCESS,
    data: data
})

const fetchStatisticsBeerDrinkersError = message => ({
    type: FETCH_STATISTICS_BEER_DRINKERS_ERROR,
    message: message
})
