import axios from "axios";
import {TABLE_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {push} from "connected-react-router";

export const CREATE_TABLE_BEGIN_REQUEST = "CREATE_TABLE_BEGIN_REQUEST";
export const CREATE_TABLE_SUCCESS = "CREATE_TABLE_SUCCESS";
export const CREATE_TABLE_ERROR = "CREATE_TABLE_ERROR";

export const createTable = (table) => (dispatch, getState) => {
    if(canCreateTable(getState())) {
        dispatch(createTableRequest());
        return axios.post(TABLE_URL, table)
            .then(json => {
                dispatch(createTableSuccess(json.data));
                dispatch(push("/tables/" + json.data.id))
            })
            .catch(err => dispatch(createTableError(getExceptionResponseMessage(err))))
    }
}

const canCreateTable = (state) => {
    return state.createTable.isReady;
}

const createTableRequest = () => ({
    type: CREATE_TABLE_BEGIN_REQUEST
})

const createTableSuccess = (data) => ({
    type: CREATE_TABLE_SUCCESS,
    data: data
})

const createTableError = message => ({
    type: CREATE_TABLE_ERROR,
    message: message
})
