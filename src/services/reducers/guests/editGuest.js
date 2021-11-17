import {editGuest} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialGuestState = {
    isReady: true
}

export function editGuestReducer(state = initialGuestState, action) {
    switch (action.type) {
        case editGuest.EDIT_GUEST_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case editGuest.EDIT_GUEST_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case editGuest.EDIT_GUEST_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
