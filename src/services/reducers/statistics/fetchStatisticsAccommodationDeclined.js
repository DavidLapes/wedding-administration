import {fetchStatisticsAccommodationDeclined} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsAccommodationDeclinedReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsAccommodationDeclined.FETCH_STATISTICS_ACCOMMODATION_DECLINED_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsAccommodationDeclined.FETCH_STATISTICS_ACCOMMODATION_DECLINED_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsAccommodationDeclined.FETCH_STATISTICS_ACCOMMODATION_DECLINED_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
