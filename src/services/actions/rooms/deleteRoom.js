import axios from "axios";
import {ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {fetchRooms} from "./fetchRooms";

export const DELETE_ROOM_BEGIN_REQUEST = "DELETE_ROOM_BEGIN_REQUEST";
export const DELETE_ROOM_SUCCESS = "DELETE_ROOM_SUCCESS";
export const DELETE_ROOM_ERROR = "DELETE_ROOM_ERROR";

export const deleteRoom = (id) => (dispatch, getState) => {
    if(canDeleteRoom(getState())) {
        dispatch(deleteRoomRequest());
        return axios.delete(ROOM_URL + "/" + id)
            .then(json => {
                dispatch(deleteRoomSuccess(json.data));
                dispatch(fetchRooms());
            })
            .catch(err => dispatch(deleteRoomError(getExceptionResponseMessage(err))))
    }
}

const canDeleteRoom = (state) => {
    return state.deleteRoom.isReady;
}

const deleteRoomRequest = () => ({
    type: DELETE_ROOM_BEGIN_REQUEST
})

const deleteRoomSuccess = (data) => ({
    type: DELETE_ROOM_SUCCESS,
    data: data
})

const deleteRoomError = message => ({
    type: DELETE_ROOM_ERROR,
    message: message
})
