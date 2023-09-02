import {
    IGREJA_LIST_REQUEST,
    IGREJA_LIST_SUCCESS,
    IGREJA_LIST_FAIL,
    IGREJA_DELETE_REQUEST,
    IGREJA_DELETE_SUCCESS,
    IGREJA_DELETE_FAIL,
} from "../constants/igrejaConstants";
import axios from "axios";

export const listIgrejas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/igrejas`, config);
        dispatch({ type: IGREJA_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: IGREJA_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteIgreja = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: IGREJA_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const {data} = await axios.delete(`/api/igrejas/delete/${id}`, config);

        dispatch({
            type: IGREJA_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: IGREJA_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
