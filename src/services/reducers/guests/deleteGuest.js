import {deleteGuest} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialGuestState = {
    isReady: true
}

export function deleteGuestReducer(state = initialGuestState, action) {
    switch (action.type) {
        case deleteGuest.DELETE_GUEST_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case deleteGuest.DELETE_GUEST_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case deleteGuest.DELETE_GUEST_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
