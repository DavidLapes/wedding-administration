import axios from "axios";
import {ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {push} from "connected-react-router";

export const CREATE_ROOM_BEGIN_REQUEST = "CREATE_ROOM_BEGIN_REQUEST";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERROR = "CREATE_ROOM_ERROR";

export const createRoom = (room) => (dispatch, getState) => {
    if(canCreateRoom(getState())) {
        dispatch(createRoomRequest());
        return axios.post(ROOM_URL, room)
            .then(json => {
                dispatch(createRoomSuccess(json.data));
                dispatch(push("/rooms/" + json.data.id))
            })
            .catch(err => dispatch(createRoomError(getExceptionResponseMessage(err))))
    }
}

const canCreateRoom = (state) => {
    return state.createRoom.isReady;
}

const createRoomRequest = () => ({
    type: CREATE_ROOM_BEGIN_REQUEST
})

const createRoomSuccess = (data) => ({
    type: CREATE_ROOM_SUCCESS,
    data: data
})

const createRoomError = message => ({
    type: CREATE_ROOM_ERROR,
    message: message
})
