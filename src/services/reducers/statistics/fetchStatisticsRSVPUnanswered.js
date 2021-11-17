import {fetchStatisticsRSVPUnanswered} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsRSVPUnansweredReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsRSVPUnanswered.FETCH_STATISTICS_RSVP_UNANSWERED_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsRSVPUnanswered.FETCH_STATISTICS_RSVP_UNANSWERED_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsRSVPUnanswered.FETCH_STATISTICS_RSVP_UNANSWERED_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
