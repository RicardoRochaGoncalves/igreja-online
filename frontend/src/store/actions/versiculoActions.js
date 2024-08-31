import {
    VERSICULO_CREATE_FAIL,
    VERSICULO_CREATE_REQUEST,
    VERSICULO_CREATE_RESET,
    VERSICULO_CREATE_SUCCESS,
    VERSICULO_DELETE_FAIL,
    VERSICULO_DELETE_REQUEST,
    VERSICULO_DELETE_SUCCESS,
    VERSICULO_DETAILS_FAIL,
    VERSICULO_DETAILS_REQUEST,
    VERSICULO_DETAILS_SUCCESS,
    VERSICULO_LIST_FAIL,
    VERSICULO_LIST_REQUEST,
    VERSICULO_LIST_SUCCESS,
    VERSICULO_UPDATE_FAIL,
    VERSICULO_UPDATE_REQUEST,
    VERSICULO_UPDATE_RESET,
    VERSICULO_UPDATE_SUCCESS,
} from "../constants/versiculoConstants";

import versiculoService from "../../services/api/versiculoService";

export const listVersiculos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: VERSICULO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const versiculos = await versiculoService.listVersiculos(userInfo.token);

        dispatch({
            type: VERSICULO_LIST_SUCCESS,
            payload: versiculos,
        });
    } catch (error) {
        dispatch({
            type: VERSICULO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const getVersiculoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERSICULO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const versiculo = await versiculoService.getVersiculoDetails(id, userInfo.token);

        dispatch({
            type: VERSICULO_DETAILS_SUCCESS,
            payload: versiculo,
        });
    } catch (error) {
        dispatch({
            type: VERSICULO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createVersiculo = (versiculo) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERSICULO_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdVersiculo = await versiculoService.createVersiculo(versiculo, userInfo.token);

        dispatch({
            type: VERSICULO_CREATE_SUCCESS,
            payload: createdVersiculo,
        });
    } catch (error) {
        dispatch({
            type: VERSICULO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const updateVersiculo = (versiculo) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERSICULO_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedVersiculo = await versiculoService.updateVersiculo(versiculo, userInfo.token);

        dispatch({
            type: VERSICULO_UPDATE_SUCCESS,
            payload: updatedVersiculo,
        });
    } catch (error) {
        dispatch({
            type: VERSICULO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const deleteVersiculo = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERSICULO_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await versiculoService.deleteVersiculo(id, userInfo.token);

        dispatch({ type: VERSICULO_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: VERSICULO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

