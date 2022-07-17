import axios from "axios";
import {ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_ROOM_DETAIL_BEGIN_REQUEST = "FETCH_ROOM_DETAIL_BEGIN_REQUEST";
export const FETCH_ROOM_DETAIL_SUCCESS = "FETCH_ROOM_DETAIL_SUCCESS";
export const FETCH_ROOM_DETAIL_ERROR = "FETCH_ROOM_DETAIL_ERROR";

export const fetchRoomDetail = (id) => (dispatch, getState) => {
    if(canFetchRoom(getState())) {
        dispatch(fetchRoomDetailRequest());
        return axios.get(ROOM_URL + "/" + id)
            .then(json => dispatch(fetchRoomDetailSuccess(json.data)))
            .catch(err => dispatch(fetchRoomDetailError(getExceptionResponseMessage(err))))
    }
}

const canFetchRoom = (state) => {
    return state.fetchRoomsDetails.isReady;
}

const fetchRoomDetailRequest = () => ({
    type: FETCH_ROOM_DETAIL_BEGIN_REQUEST
})

const fetchRoomDetailSuccess = (data) => ({
    type: FETCH_ROOM_DETAIL_SUCCESS,
    data: data
})

const fetchRoomDetailError = message => ({
    type: FETCH_ROOM_DETAIL_ERROR,
    message: message
})
