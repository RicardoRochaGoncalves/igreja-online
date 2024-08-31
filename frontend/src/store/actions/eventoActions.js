import {
    EVENTO_LIST_REQUEST,
    EVENTO_LIST_SUCCESS,
    EVENTO_LIST_FAIL,
    EVENTO_CREATE_FAIL,
    EVENTO_CREATE_REQUEST,
    EVENTO_CREATE_RESET,
    EVENTO_CREATE_SUCCESS,
    EVENTO_DELETE_FAIL,
    EVENTO_DELETE_REQUEST,
    EVENTO_DELETE_SUCCESS,
    EVENTO_DETAILS_FAIL,
    EVENTO_DETAILS_REQUEST,
    EVENTO_DETAILS_SUCCESS,
    EVENTO_UPDATE_FAIL,
    EVENTO_UPDATE_REQUEST,
    EVENTO_UPDATE_RESET,
    EVENTO_UPDATE_SUCCESS,
} from "../constants/eventoConstants";
import eventoService from "../../services/api/eventoService";

export const listEventos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENTO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const eventos = await eventoService.listEventos(userInfo.token);

        dispatch({
            type: EVENTO_LIST_SUCCESS,
            payload: eventos,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getEventoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENTO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const evento = await eventoService.getEventoDetails(id, userInfo.token);

        dispatch({
            type: EVENTO_DETAILS_SUCCESS,
            payload: evento,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createEvento = (evento) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENTO_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdEvento = await eventoService.createEvento(
            evento,
            userInfo.token
        );

        dispatch({
            type: EVENTO_CREATE_SUCCESS,
            payload: createdEvento,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateEvento = (evento) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENTO_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedEvento = await eventoService.updateEvento(
            evento,
            userInfo.token
        );

        dispatch({
            type: EVENTO_UPDATE_SUCCESS,
            payload: updatedEvento,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteEvento = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENTO_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await eventoService.deleteEvento(id, userInfo.token);

        dispatch({ type: EVENTO_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: EVENTO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
