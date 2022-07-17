import {fetchAvailableRooms} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialRoomState = {
    data: [],
    isReady: true
}

export function fetchAvailableRoomsReducer(state = initialRoomState, action) {
    switch (action.type) {
        case fetchAvailableRooms.FETCH_AVAILABLE_ROOM_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchAvailableRooms.FETCH_AVAILABLE_ROOM_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchAvailableRooms.FETCH_AVAILABLE_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
