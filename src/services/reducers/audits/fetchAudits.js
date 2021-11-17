import {fetchAudits} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialAuditState = {
    data: [],
    dataReduced: [],
    isReady: true
}

export function fetchAuditsReducer(state = initialAuditState, action) {
    switch (action.type) {
        case fetchAudits.FETCH_AUDIT_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchAudits.FETCH_AUDIT_SUCCESS:
            return {
                ...state,
                data: action.data,
                dataReduced: action.data.map(auditLog => {
                    return {
                        id: auditLog.id,
                        guest_id: auditLog.payload.record.id,
                        event :auditLog.event,
                        time_created: auditLog.time_created,
                        first_name: auditLog.payload.record.first_name,
                        last_name: auditLog.payload.record.last_name,
                        email: auditLog.payload.email,
                        accommodation: auditLog.payload.accommodation
                    }
                }),
                isReady: true
            }
        case fetchAudits.FETCH_AUDIT_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
