import {fetchTables} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialTableState = {
    data: [],
    isReady: true
}

export function fetchTablesReducer(state = initialTableState, action) {
    switch (action.type) {
        case fetchTables.FETCH_TABLE_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchTables.FETCH_TABLE_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchTables.FETCH_TABLE_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
