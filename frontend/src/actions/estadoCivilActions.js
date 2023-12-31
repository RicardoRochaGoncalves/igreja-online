import {
    ESTADO_CIVIL_LIST_REQUEST,
    ESTADO_CIVIL_LIST_SUCCESS,
    ESTADO_CIVIL_LIST_FAIL,
    ESTADO_CIVIL_DELETE_REQUEST,
    ESTADO_CIVIL_DELETE_SUCCESS,
    ESTADO_CIVIL_DELETE_FAIL,
    ESTADO_CIVIL_DETAILS_REQUEST,
    ESTADO_CIVIL_DETAILS_SUCCESS,
    ESTADO_CIVIL_DETAILS_FAIL,
    ESTADO_CIVIL_UPDATE_REQUEST,
    ESTADO_CIVIL_UPDATE_SUCCESS,
    ESTADO_CIVIL_UPDATE_FAIL,
    ESTADO_CIVIL_UPDATE_RESET,
    ESTADO_CIVIL_CREATE_REQUEST,
    ESTADO_CIVIL_CREATE_SUCCESS,
    ESTADO_CIVIL_CREATE_FAIL,
    ESTADO_CIVIL_CREATE_RESET,
} from "../constants/estadoCivilConstants";

import axios from "axios";

export const listEstadosCivis = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/estadoscivis/`, config);
        dispatch({ type: ESTADO_CIVIL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteEstadoCivil = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ESTADO_CIVIL_DELETE_REQUEST,
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
            `/api/estadoscivis/delete/${id}`,
            config
        );

        dispatch({
            type: ESTADO_CIVIL_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listEstadoCivilDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/estadoscivis/${id}`, config);

        dispatch({
            type: ESTADO_CIVIL_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const updateEstadoCivil = (estadoCivil) => async ( dispatch, getState ) => {
    try {
        dispatch({
            type: ESTADO_CIVIL_UPDATE_REQUEST,
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
            `/api/estadoscivis/update/${estadoCivil.id}/`,
            estadoCivil,
            config
        );
        dispatch({
            type: ESTADO_CIVIL_UPDATE_SUCCESS,
            payload: data,
        });
        dispatch({ type: ESTADO_CIVIL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createEstadoCivil = (estadoCivil) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ESTADO_CIVIL_CREATE_REQUEST,
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
            `/api/estadoscivis/create/`,
            estadoCivil,
            config
        );

        dispatch({
            type: ESTADO_CIVIL_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}
