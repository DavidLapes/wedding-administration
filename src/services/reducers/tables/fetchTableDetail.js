import {fetchTableDetail} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialTableDetailState = {
    isReady: true
}

export function fetchTableDetailReducer(state = initialTableDetailState, action) {
    switch (action.type) {
        case fetchTableDetail.FETCH_TABLE_DETAIL_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchTableDetail.FETCH_TABLE_DETAIL_SUCCESS:
            return {
                ...state,
                [action.data.id]: {
                    ...state[action.data.id],
                    ...action.data,
                    isReady: true
                },
                isReady: true
            }
        case fetchTableDetail.FETCH_TABLE_DETAIL_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
