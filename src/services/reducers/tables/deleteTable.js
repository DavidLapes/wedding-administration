import {deleteTable} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialTableState = {
    isReady: true
}

export function deleteTableReducer(state = initialTableState, action) {
    switch (action.type) {
        case deleteTable.DELETE_TABLE_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case deleteTable.DELETE_TABLE_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case deleteTable.DELETE_TABLE_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
