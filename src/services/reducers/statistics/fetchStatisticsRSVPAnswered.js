import {fetchStatisticsRSVPAnswered} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsRSVPAnsweredReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsRSVPAnswered.FETCH_STATISTICS_RSVP_ANSWERED_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsRSVPAnswered.FETCH_STATISTICS_RSVP_ANSWERED_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsRSVPAnswered.FETCH_STATISTICS_RSVP_ANSWERED_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
