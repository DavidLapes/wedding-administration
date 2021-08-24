import axios from "axios";
import {TABLE_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {fetchTables} from "./fetchTables";

export const DELETE_TABLE_BEGIN_REQUEST = "DELETE_TABLE_BEGIN_REQUEST";
export const DELETE_TABLE_SUCCESS = "DELETE_TABLE_SUCCESS";
export const DELETE_TABLE_ERROR = "DELETE_TABLE_ERROR";

export const deleteTable = (id) => (dispatch, getState) => {
    if(canDeleteTable(getState())) {
        dispatch(deleteTableRequest());
        return axios.delete(TABLE_URL + "/" + id)
            .then(json => {
                dispatch(deleteTableSuccess(json.data));
                dispatch(fetchTables());
            })
            .catch(err => dispatch(deleteTableError(getExceptionResponseMessage(err))))
    }
}

const canDeleteTable = (state) => {
    return state.deleteTable.isReady;
}

const deleteTableRequest = () => ({
    type: DELETE_TABLE_BEGIN_REQUEST
})

const deleteTableSuccess = (data) => ({
    type: DELETE_TABLE_SUCCESS,
    data: data
})

const deleteTableError = message => ({
    type: DELETE_TABLE_ERROR,
    message: message
})
