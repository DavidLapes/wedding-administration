import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const ASSIGN_ROOM_TO_GUEST_BEGIN_REQUEST = "ASSIGN_ROOM_TO_GUEST_BEGIN_REQUEST";
export const ASSIGN_ROOM_TO_GUEST_SUCCESS = "ASSIGN_ROOM_TO_GUEST_SUCCESS";
export const ASSIGN_ROOM_TO_GUEST_ERROR = "ASSIGN_ROOM_TO_GUEST_ERROR";

export const assignRoomToGuest = (id, room_id) => (dispatch, getState) => {
    if(canEditRoomToGuest(getState())) {
        dispatch(assignRoomToGuestRequest());
        return axios.put(GUEST_URL + "/" + id + "/rooms", {room_id: room_id})
            .then(json => {
                dispatch(assignRoomToGuestSuccess(json.data));
            })
            .catch(err => dispatch(assignRoomToGuestError(getExceptionResponseMessage(err))))
    }
}

const canEditRoomToGuest = (state) => {
    return state.assignRoomToGuest.isReady;
}

const assignRoomToGuestRequest = () => ({
    type: ASSIGN_ROOM_TO_GUEST_BEGIN_REQUEST
})

const assignRoomToGuestSuccess = (data) => ({
    type: ASSIGN_ROOM_TO_GUEST_SUCCESS,
    data: data
})

const assignRoomToGuestError = message => ({
    type: ASSIGN_ROOM_TO_GUEST_ERROR,
    message: message
})
