import axios from "axios";
import {TABLE_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_TABLE_BEGIN_REQUEST = "FETCH_TABLE_BEGIN_REQUEST";
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";
export const FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR";

export const fetchTables = () => (dispatch, getState) => {
    if (canFetchTables(getState())) {
        dispatch(fetchTablesRequest());
        return axios.get(TABLE_URL)
            .then(json => dispatch(fetchTablesSuccess(json.data.data)))
            .catch(err => dispatch(fetchTablesError(getExceptionResponseMessage(err))))
    }
}

const canFetchTables = (state) => {
    return state.fetchTables.isReady;
}

const fetchTablesRequest = () => ({
    type: FETCH_TABLE_BEGIN_REQUEST
})

const fetchTablesSuccess = (data) => ({
    type: FETCH_TABLE_SUCCESS,
    data: data
})

const fetchTablesError = message => ({
    type: FETCH_TABLE_ERROR,
    message: message
})
