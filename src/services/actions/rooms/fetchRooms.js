import axios from "axios";
import {ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_ROOM_BEGIN_REQUEST = "FETCH_ROOM_BEGIN_REQUEST";
export const FETCH_ROOM_SUCCESS = "FETCH_ROOM_SUCCESS";
export const FETCH_ROOM_ERROR = "FETCH_ROOM_ERROR";

export const fetchRooms = () => (dispatch, getState) => {
    if (canFetchRooms(getState())) {
        dispatch(fetchRoomsRequest());
        return axios.get(ROOM_URL)
            .then(json => dispatch(fetchRoomsSuccess(json.data.data)))
            .catch(err => dispatch(fetchRoomsError(getExceptionResponseMessage(err))))
    }
}

const canFetchRooms = (state) => {
    return state.fetchRooms.isReady;
}

const fetchRoomsRequest = () => ({
    type: FETCH_ROOM_BEGIN_REQUEST
})

const fetchRoomsSuccess = (data) => ({
    type: FETCH_ROOM_SUCCESS,
    data: data
})

const fetchRoomsError = message => ({
    type: FETCH_ROOM_ERROR,
    message: message
})
