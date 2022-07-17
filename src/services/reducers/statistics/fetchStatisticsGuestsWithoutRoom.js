import {fetchStatisticsGuestsWithoutRoom} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialStatisticState = {
    data: [],
    isReady: true
}

export function fetchStatisticsGuestsWithoutRoomReducer(state = initialStatisticState, action) {
    switch (action.type) {
        case fetchStatisticsGuestsWithoutRoom.FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchStatisticsGuestsWithoutRoom.FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchStatisticsGuestsWithoutRoom.FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
