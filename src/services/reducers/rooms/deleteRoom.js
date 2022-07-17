import {deleteRoom} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialRoomState = {
    isReady: true
}

export function deleteRoomReducer(state = initialRoomState, action) {
    switch (action.type) {
        case deleteRoom.DELETE_ROOM_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case deleteRoom.DELETE_ROOM_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case deleteRoom.DELETE_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
