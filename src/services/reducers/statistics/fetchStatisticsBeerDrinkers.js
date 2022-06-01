import {fetchStatisticsBeerDrinkers} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsBeerDrinkersReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsBeerDrinkers.FETCH_STATISTICS_BEER_DRINKERS_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsBeerDrinkers.FETCH_STATISTICS_BEER_DRINKERS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsBeerDrinkers.FETCH_STATISTICS_BEER_DRINKERS_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
