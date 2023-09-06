import {
    ENDERECO_LIST_REQUEST,
    ENDERECO_LIST_SUCCESS,
    ENDERECO_LIST_FAIL,
    ENDERECO_DELETE_REQUEST,
    ENDERECO_DELETE_SUCCESS,
    ENDERECO_DELETE_FAIL,
    ENDERECO_DETAILS_REQUEST,
    ENDERECO_DETAILS_SUCCESS,
    ENDERECO_DETAILS_FAIL,
    ENDERECO_UPDATE_REQUEST,
    ENDERECO_UPDATE_SUCCESS,
    ENDERECO_UPDATE_FAIL,
    ENDERECO_UPDATE_RESET,
    ENDERECO_CREATE_REQUEST,
    ENDERECO_CREATE_SUCCESS,
    ENDERECO_CREATE_FAIL,
    ENDERECO_CREATE_RESET,
} from "../constants/enderecoConstants";
import axios from "axios";

export const listEnderecos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ENDERECO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/enderecos/", config);
        dispatch({ type: ENDERECO_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ENDERECO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteEndereco = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENDERECO_DELETE_REQUEST,
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
        const { data } = await axios.delete(
            `/api/enderecos/delete/${id}/`,
            config
        );
        dispatch({
            type: ENDERECO_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ENDERECO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const listEnderecoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ENDERECO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/enderecos/${id}/`, config);
        dispatch({ type: ENDERECO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ENDERECO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateEndereco = (endereco) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENDERECO_UPDATE_REQUEST,
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
            `/api/enderecos/update/${endereco.id}/`,
            endereco,
            config
        );
        dispatch({
            type: ENDERECO_UPDATE_SUCCESS,
            payload: data,
        });
        dispatch({ type: ENDERECO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ENDERECO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createEndereco = (endereco) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENDERECO_CREATE_REQUEST,
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
        const { data } = await axios.post(
            `/api/enderecos/create/`,
            endereco,
            config
        );
        dispatch({
            type: ENDERECO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ENDERECO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
