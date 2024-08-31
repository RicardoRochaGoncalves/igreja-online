import {
    ESTADO_CIVIL_LIST_REQUEST,
    ESTADO_CIVIL_LIST_SUCCESS,
    ESTADO_CIVIL_LIST_FAIL,
    ESTADO_CIVIL_CREATE_FAIL,
    ESTADO_CIVIL_CREATE_REQUEST,
    ESTADO_CIVIL_CREATE_RESET,
    ESTADO_CIVIL_CREATE_SUCCESS,
    ESTADO_CIVIL_DELETE_FAIL,
    ESTADO_CIVIL_DELETE_REQUEST,
    ESTADO_CIVIL_DELETE_SUCCESS,
    ESTADO_CIVIL_DETAILS_FAIL,
    ESTADO_CIVIL_DETAILS_REQUEST,
    ESTADO_CIVIL_DETAILS_SUCCESS,
    ESTADO_CIVIL_UPDATE_FAIL,
    ESTADO_CIVIL_UPDATE_REQUEST,
    ESTADO_CIVIL_UPDATE_RESET,
    ESTADO_CIVIL_UPDATE_SUCCESS,
} from "../constants/estadoCivilConstants";
import estadoCivilService from "../../services/api/estadoCivilService";

export const listEstadosCivis = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const estadosCivis = await estadoCivilService.listEstadosCivis(userInfo.token);

        dispatch({
            type: ESTADO_CIVIL_LIST_SUCCESS,
            payload: estadosCivis,
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const getEstadoCivilDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const estadoCivil = await estadoCivilService.getEstadoCivilDetails(id, userInfo.token);

        dispatch({
            type: ESTADO_CIVIL_DETAILS_SUCCESS,
            payload: estadoCivil,
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_DETAILS_FAIL,
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

        const createdEstadoCivil = await estadoCivilService.createEstadoCivil(estadoCivil, userInfo.token);

        dispatch({
            type: ESTADO_CIVIL_CREATE_SUCCESS,
            payload: createdEstadoCivil,
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

export const updateEstadoCivil = (estadoCivil) => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedEstadoCivil = await estadoCivilService.updateEstadoCivil(estadoCivil, userInfo.token);

        dispatch({
            type: ESTADO_CIVIL_UPDATE_SUCCESS,
            payload: updatedEstadoCivil,
        });
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

export const deleteEstadoCivil = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await estadoCivilService.deleteEstadoCivil(id, userInfo.token);

        dispatch({ type: ESTADO_CIVIL_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

