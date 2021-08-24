import {createGuest} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialGuestState = {
    isReady: true
}

export function createGuestReducer(state = initialGuestState, action) {
    switch (action.type) {
        case createGuest.CREATE_GUEST_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case createGuest.CREATE_GUEST_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case createGuest.CREATE_GUEST_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
