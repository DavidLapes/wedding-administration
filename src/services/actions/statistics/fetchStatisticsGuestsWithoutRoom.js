import axios from "axios";
import {STATISTICS_GUESTS_WITHOUT_ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_BEGIN_REQUEST = "FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_BEGIN_REQUEST";
export const FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_SUCCESS = "FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_SUCCESS";
export const FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_ERROR = "FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_ERROR";

export const fetchStatisticsGuestsWithoutRoom = () => (dispatch, getState) => {
    if (canFetchStatisticsGuestsWithoutRoom(getState())) {
        dispatch(fetchStatisticsGuestsWithoutRoomRequest());
        return axios.get(STATISTICS_GUESTS_WITHOUT_ROOM_URL)
            .then(json => dispatch(fetchStatisticsGuestsWithoutRoomSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsGuestsWithoutRoomError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsGuestsWithoutRoom = (state) => {
    return state.fetchStatisticsGuestsWithoutRoom.isReady;
}

const fetchStatisticsGuestsWithoutRoomRequest = () => ({
    type: FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_BEGIN_REQUEST
})

const fetchStatisticsGuestsWithoutRoomSuccess = (data) => ({
    type: FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_SUCCESS,
    data: data
})

const fetchStatisticsGuestsWithoutRoomError = message => ({
    type: FETCH_STATISTICS_GUESTS_WITHOUT_ROOM_ERROR,
    message: message
})
