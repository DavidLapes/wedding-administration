import {fetchRoomDetail} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialRoomDetailState = {
    isReady: true
}

export function fetchRoomDetailReducer(state = initialRoomDetailState, action) {
    switch (action.type) {
        case fetchRoomDetail.FETCH_ROOM_DETAIL_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchRoomDetail.FETCH_ROOM_DETAIL_SUCCESS:
            return {
                ...state,
                [action.data.id]: {
                    ...state[action.data.id],
                    ...action.data,
                    isReady: true
                },
                isReady: true
            }
        case fetchRoomDetail.FETCH_ROOM_DETAIL_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
