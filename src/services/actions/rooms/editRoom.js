import axios from "axios";
import {ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {push} from "connected-react-router";

export const EDIT_ROOM_BEGIN_REQUEST = "EDIT_ROOM_BEGIN_REQUEST";
export const EDIT_ROOM_SUCCESS = "EDIT_ROOM_SUCCESS";
export const EDIT_ROOM_ERROR = "EDIT_ROOM_ERROR";

export const editRoom = (id, room) => (dispatch, getState) => {
    if(canEditRoom(getState())) {
        dispatch(editRoomRequest());
        return axios.put(ROOM_URL + "/" + id, room)
            .then(json => {
                dispatch(editRoomSuccess(json.data));
                dispatch(push("/rooms/" + json.data.id))
            })
            .catch(err => dispatch(editRoomError(getExceptionResponseMessage(err))))
    }
}

const canEditRoom = (state) => {
    return state.editRoom.isReady;
}

const editRoomRequest = () => ({
    type: EDIT_ROOM_BEGIN_REQUEST
})

const editRoomSuccess = (data) => ({
    type: EDIT_ROOM_SUCCESS,
    data: data
})

const editRoomError = message => ({
    type: EDIT_ROOM_ERROR,
    message: message
})
