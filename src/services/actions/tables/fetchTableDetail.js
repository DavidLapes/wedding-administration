import axios from "axios";
import {TABLE_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_TABLE_DETAIL_BEGIN_REQUEST = "FETCH_TABLE_DETAIL_BEGIN_REQUEST";
export const FETCH_TABLE_DETAIL_SUCCESS = "FETCH_TABLE_DETAIL_SUCCESS";
export const FETCH_TABLE_DETAIL_ERROR = "FETCH_TABLE_DETAIL_ERROR";

export const fetchTableDetail = (id) => (dispatch, getState) => {
    if(canFetchTable(getState())) {
        dispatch(fetchTableDetailRequest());
        return axios.get(TABLE_URL + "/" + id)
            .then(json => dispatch(fetchTableDetailSuccess(json.data)))
            .catch(err => dispatch(fetchTableDetailError(getExceptionResponseMessage(err))))
    }
}

const canFetchTable = (state) => {
    return state.fetchTablesDetails.isReady;
}

const fetchTableDetailRequest = () => ({
    type: FETCH_TABLE_DETAIL_BEGIN_REQUEST
})

const fetchTableDetailSuccess = (data) => ({
    type: FETCH_TABLE_DETAIL_SUCCESS,
    data: data
})

const fetchTableDetailError = message => ({
    type: FETCH_TABLE_DETAIL_ERROR,
    message: message
})
