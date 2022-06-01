import {fetchStatisticsWineDrinkers} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsWineDrinkersReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsWineDrinkers.FETCH_STATISTICS_WINE_DRINKERS_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsWineDrinkers.FETCH_STATISTICS_WINE_DRINKERS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsWineDrinkers.FETCH_STATISTICS_WINE_DRINKERS_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
