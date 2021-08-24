import {createTable} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialTableState = {
    isReady: true
}

export function createTableReducer(state = initialTableState, action) {
    switch (action.type) {
        case createTable.CREATE_TABLE_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case createTable.CREATE_TABLE_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case createTable.CREATE_TABLE_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
