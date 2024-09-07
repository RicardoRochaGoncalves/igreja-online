import {
    CATEGORIA_AGENDA_CREATE_FAIL,
    CATEGORIA_AGENDA_CREATE_REQUEST,
    CATEGORIA_AGENDA_CREATE_RESET,
    CATEGORIA_AGENDA_CREATE_SUCCESS,
    CATEGORIA_AGENDA_DELETE_FAIL,
    CATEGORIA_AGENDA_DELETE_REQUEST,
    CATEGORIA_AGENDA_DELETE_SUCCESS,
    CATEGORIA_AGENDA_DETAILS_FAIL,
    CATEGORIA_AGENDA_DETAILS_REQUEST,
    CATEGORIA_AGENDA_DETAILS_SUCCESS,
    CATEGORIA_AGENDA_LIST_FAIL,
    CATEGORIA_AGENDA_LIST_REQUEST,
    CATEGORIA_AGENDA_LIST_SUCCESS,
    CATEGORIA_AGENDA_UPDATE_FAIL,
    CATEGORIA_AGENDA_UPDATE_REQUEST,
    CATEGORIA_AGENDA_UPDATE_RESET,
    CATEGORIA_AGENDA_UPDATE_SUCCESS,
} from "../constants/categoriaAgendaConstants";
import categoriaAgendaService from "../../services/api/categoriaAgendaService";

export const listCategoriasAgenda = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_AGENDA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriasAgenda =
            await categoriaAgendaService.listCategoriasAgenda(userInfo.token);

        dispatch({
            type: CATEGORIA_AGENDA_LIST_SUCCESS,
            payload: categoriasAgenda,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_AGENDA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const getCategoriaAgendaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_AGENDA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriaAgenda =
            await categoriaAgendaService.getCategoriaAgendaDetails(id, userInfo.token);

        dispatch({
            type: CATEGORIA_AGENDA_DETAILS_SUCCESS,
            payload: categoriaAgenda,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_AGENDA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createCategoriaAgenda = (categoriaAgenda) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_AGENDA_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdCategoriaAgenda =
            await categoriaAgendaService.createCategoriaAgenda(categoriaAgenda, userInfo.token);

        dispatch({
            type: CATEGORIA_AGENDA_CREATE_SUCCESS,
            payload: createdCategoriaAgenda,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_AGENDA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const updateCategoriaAgenda = (categoriaAgenda) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_AGENDA_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedCategoriaAgenda =
            await categoriaAgendaService.updateCategoriaAgenda(categoriaAgenda, userInfo.token);

        dispatch({
            type: CATEGORIA_AGENDA_UPDATE_SUCCESS,
            payload: updatedCategoriaAgenda,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_AGENDA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const deleteCategoriaAgenda = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_AGENDA_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await categoriaAgendaService.deleteCategoriaAgenda(id, userInfo.token);

        dispatch({ type: CATEGORIA_AGENDA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: CATEGORIA_AGENDA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

