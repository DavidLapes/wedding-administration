import {fetchStatisticsAccommodationAccepted} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsAccommodationAcceptedReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsAccommodationAccepted.FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsAccommodationAccepted.FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsAccommodationAccepted.FETCH_STATISTICS_ACCOMMODATION_ACCEPTED_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
