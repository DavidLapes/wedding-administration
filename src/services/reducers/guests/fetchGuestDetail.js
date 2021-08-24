import {fetchGuestDetail} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialGuestDetailState = {
    isReady: true
}

export function fetchGuestDetailReducer(state = initialGuestDetailState, action) {
    switch (action.type) {
        case fetchGuestDetail.FETCH_GUEST_DETAIL_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchGuestDetail.FETCH_GUEST_DETAIL_SUCCESS:
            return {
                ...state,
                [action.data.id]: {
                    ...state[action.data.id],
                    ...action.data,
                    isReady: true
                },
                isReady: true
            }
        case fetchGuestDetail.FETCH_GUEST_DETAIL_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
