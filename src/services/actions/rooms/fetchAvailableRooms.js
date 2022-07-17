import axios from "axios";
import {AVAILABLE_ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_AVAILABLE_ROOM_BEGIN_REQUEST = "FETCH_AVAILABLE_ROOM_BEGIN_REQUEST";
export const FETCH_AVAILABLE_ROOM_SUCCESS = "FETCH_AVAILABLE_ROOM_SUCCESS";
export const FETCH_AVAILABLE_ROOM_ERROR = "FETCH_AVAILABLE_ROOM_ERROR";

export const fetchAvailableRooms = () => (dispatch, getState) => {
    if (canFetchAvailableRooms(getState())) {
        dispatch(fetchAvailableRoomsRequest());
        return axios.get(AVAILABLE_ROOM_URL)
            .then(json => dispatch(fetchAvailableRoomsSuccess(json.data.data)))
            .catch(err => dispatch(fetchAvailableRoomsError(getExceptionResponseMessage(err))))
    }
}

const canFetchAvailableRooms = (state) => {
    return state.fetchAvailableRooms.isReady;
}

const fetchAvailableRoomsRequest = () => ({
    type: FETCH_AVAILABLE_ROOM_BEGIN_REQUEST
})

const fetchAvailableRoomsSuccess = (data) => ({
    type: FETCH_AVAILABLE_ROOM_SUCCESS,
    data: data
})

const fetchAvailableRoomsError = message => ({
    type: FETCH_AVAILABLE_ROOM_ERROR,
    message: message
})
