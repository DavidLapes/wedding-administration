import {assignRoomToGuest} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialRoomToGuestState = {
    isReady: true
}

export function assignRoomToGuestReducer(state = initialRoomToGuestState, action) {
    switch (action.type) {
        case assignRoomToGuest.ASSIGN_ROOM_TO_GUEST_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case assignRoomToGuest.ASSIGN_ROOM_TO_GUEST_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case assignRoomToGuest.ASSIGN_ROOM_TO_GUEST_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
