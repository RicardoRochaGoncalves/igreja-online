import {
    IGREJA_LIST_REQUEST,
    IGREJA_LIST_SUCCESS,
    IGREJA_LIST_FAIL,
    IGREJA_DELETE_REQUEST,
    IGREJA_DELETE_SUCCESS,
    IGREJA_DELETE_FAIL,
    IGREJA_DETAILS_REQUEST,
    IGREJA_DETAILS_SUCCESS,
    IGREJA_DETAILS_FAIL,
    IGREJA_UPDATE_REQUEST,
    IGREJA_UPDATE_SUCCESS,
    IGREJA_UPDATE_FAIL,
    IGREJA_UPDATE_RESET,
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

        const { data } = await axios.delete(
            `/api/igrejas/delete/${id}`,
            config
        );

        dispatch({
            type: IGREJA_DELETE_SUCCESS,
            payload: data,
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
};

export const listIgrejaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_DETAILS_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/igrejas/${id}`, config);
        dispatch({ type: IGREJA_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: IGREJA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateIgreja = (igreja) => async (dispatch, getState) => {
    try {
        dispatch({
            type: IGREJA_UPDATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/igrejas/update/${igreja.id}/`,
            igreja,
            config
        );

        dispatch({
            type: IGREJA_UPDATE_SUCCESS,
            payload: data,
        });
        dispatch({ type: IGREJA_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: IGREJA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
