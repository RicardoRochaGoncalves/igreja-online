import {
    GENERO_LIST_REQUEST,
    GENERO_LIST_SUCCESS,
    GENERO_LIST_FAIL,
    GENERO_CREATE_FAIL,
    GENERO_CREATE_REQUEST,
    GENERO_CREATE_RESET,
    GENERO_CREATE_SUCCESS,
    GENERO_DELETE_FAIL,
    GENERO_DELETE_REQUEST,
    GENERO_DELETE_SUCCESS,
    GENERO_DETAILS_FAIL,
    GENERO_DETAILS_REQUEST,
    GENERO_DETAILS_SUCCESS,
    GENERO_UPDATE_FAIL,
    GENERO_UPDATE_REQUEST,
    GENERO_UPDATE_RESET,
    GENERO_UPDATE_SUCCESS,
} from "../constants/generoConstants";
import generoService from "../../services/api/generoService";

export const listGeneros = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const generos = await generoService.listGeneros(userInfo.token);

        dispatch({
            type: GENERO_LIST_SUCCESS,
            payload: generos,
        });
    } catch (error) {
        dispatch({
            type: GENERO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const getGeneroDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const genero = await generoService.getGeneroDetails(id, userInfo.token);

        dispatch({
            type: GENERO_DETAILS_SUCCESS,
            payload: genero,
        });
    } catch (error) {
        dispatch({
            type: GENERO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createGenero = (nome) => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const genero = await generoService.createGenero(nome, userInfo.token);

        dispatch({
            type: GENERO_CREATE_SUCCESS,
            payload: genero,
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

export const updateGenero = (genero) => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedGenero = await generoService.updateGenero(genero, userInfo.token);

        dispatch({
            type: GENERO_UPDATE_SUCCESS,
            payload: updatedGenero,
        });
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

export const deleteGenero = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await generoService.deleteGenero(id, userInfo.token);

        dispatch({ type: GENERO_DELETE_SUCCESS });
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

