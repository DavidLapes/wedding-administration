import {fetchStatisticsGuestsWithRoom} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsGuestsWithRoomReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsGuestsWithRoom.FETCH_STATISTICS_GUESTS_WITH_ROOM_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsGuestsWithRoom.FETCH_STATISTICS_GUESTS_WITH_ROOM_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsGuestsWithRoom.FETCH_STATISTICS_GUESTS_WITH_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
