import {editRoom} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialRoomState = {
    isReady: true
}

export function editRoomReducer(state = initialRoomState, action) {
    switch (action.type) {
        case editRoom.EDIT_ROOM_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case editRoom.EDIT_ROOM_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case editRoom.EDIT_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
