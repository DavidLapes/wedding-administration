import {fetchStatistics} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: {},
    isReady: true
}

export function fetchStatisticsReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatistics.FETCH_STATISTICS_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatistics.FETCH_STATISTICS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatistics.FETCH_STATISTICS_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
