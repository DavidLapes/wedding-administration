import axios from "axios";
import {STATISTICS_GUESTS_WITH_ROOM_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_STATISTICS_GUESTS_WITH_ROOM_BEGIN_REQUEST = "FETCH_STATISTICS_GUESTS_WITH_ROOM_BEGIN_REQUEST";
export const FETCH_STATISTICS_GUESTS_WITH_ROOM_SUCCESS = "FETCH_STATISTICS_GUESTS_WITH_ROOM_SUCCESS";
export const FETCH_STATISTICS_GUESTS_WITH_ROOM_ERROR = "FETCH_STATISTICS_GUESTS_WITH_ROOM_ERROR";

export const fetchStatisticsGuestsWithRoom = () => (dispatch, getState) => {
    if (canFetchStatisticsGuestsWithRoom(getState())) {
        dispatch(fetchStatisticsGuestsWithRoomRequest());
        return axios.get(STATISTICS_GUESTS_WITH_ROOM_URL)
            .then(json => dispatch(fetchStatisticsGuestsWithRoomSuccess(json.data.data)))
            .catch(err => dispatch(fetchStatisticsGuestsWithRoomError(getExceptionResponseMessage(err))))
    }
}

const canFetchStatisticsGuestsWithRoom = (state) => {
    return state.fetchStatisticsGuestsWithRoom.isReady;
}

const fetchStatisticsGuestsWithRoomRequest = () => ({
    type: FETCH_STATISTICS_GUESTS_WITH_ROOM_BEGIN_REQUEST
})

const fetchStatisticsGuestsWithRoomSuccess = (data) => ({
    type: FETCH_STATISTICS_GUESTS_WITH_ROOM_SUCCESS,
    data: data
})

const fetchStatisticsGuestsWithRoomError = message => ({
    type: FETCH_STATISTICS_GUESTS_WITH_ROOM_ERROR,
    message: message
})
