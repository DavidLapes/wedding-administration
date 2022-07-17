import {createRoom} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialRoomState = {
    isReady: true
}

export function createRoomReducer(state = initialRoomState, action) {
    switch (action.type) {
        case createRoom.CREATE_ROOM_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case createRoom.CREATE_ROOM_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case createRoom.CREATE_ROOM_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
