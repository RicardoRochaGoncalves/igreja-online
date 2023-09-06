import {
    GENERO_LIST_REQUEST,
    GENERO_LIST_SUCCESS,
    GENERO_LIST_FAIL,
    GENERO_DELETE_REQUEST,
    GENERO_DELETE_SUCCESS,
    GENERO_DELETE_FAIL,
    GENERO_DETAILS_REQUEST,
    GENERO_DETAILS_SUCCESS,
    GENERO_DETAILS_FAIL,
    GENERO_UPDATE_REQUEST,
    GENERO_UPDATE_SUCCESS,
    GENERO_UPDATE_FAIL,
    GENERO_UPDATE_RESET,
    GENERO_CREATE_REQUEST,
    GENERO_CREATE_SUCCESS,
    GENERO_CREATE_FAIL,
    GENERO_CREATE_RESET,
} from "../constants/generoConstants";

import axios from "axios";

export const listGeneros = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/generos/", config);
        dispatch({ type: GENERO_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GENERO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteGenero = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GENERO_DELETE_REQUEST,
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
        const {data} = await axios.delete(`/api/generos/delete/${id}/`, config);
        dispatch({
            type: GENERO_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GENERO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const listGeneroDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/generos/${id}`, config);

        dispatch({
            type: GENERO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GENERO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const updateGenero = (genero) => async ( dispatch, getState ) => {
    try {
        dispatch({
            type: GENERO_UPDATE_REQUEST,
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
            `/api/generos/update/${genero.id}/`,
            genero,
            config
        );
        dispatch({
            type: GENERO_UPDATE_SUCCESS,
            payload: data,
        });
        dispatch({ type: GENERO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GENERO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createGenero = (genero) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GENERO_CREATE_REQUEST,
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
            `/api/generos/create/`,
            genero,
            config
        );
        dispatch({
            type: GENERO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GENERO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}