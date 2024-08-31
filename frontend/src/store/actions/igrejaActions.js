import {
    IGREJA_CREATE_REQUEST,
    IGREJA_CREATE_SUCCESS,
    IGREJA_CREATE_FAIL,
    IGREJA_DETAILS_REQUEST,
    IGREJA_DETAILS_SUCCESS,
    IGREJA_DETAILS_FAIL,
    IGREJA_LIST_REQUEST,
    IGREJA_LIST_SUCCESS,
    IGREJA_LIST_FAIL,
    IGREJA_UPDATE_REQUEST,
    IGREJA_UPDATE_SUCCESS,
    IGREJA_UPDATE_FAIL,
    IGREJA_DELETE_REQUEST,
    IGREJA_DELETE_SUCCESS,
    IGREJA_DELETE_FAIL,
    IGREJA_CREATE_RESET,
    IGREJA_UPDATE_RESET,
} from "../constants/igrejaConstants";
import igrejaService from "../../services/api/igrejaService";

export const listIgrejas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const igrejas = await igrejaService.listIgrejas(userInfo.token);

        dispatch({
            type: IGREJA_LIST_SUCCESS,
            payload: igrejas,
        });
    } catch (error) {
        dispatch({
            type: IGREJA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getIgrejaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const igreja = await igrejaService.getIgrejaDetails(id, userInfo.token);

        dispatch({
            type: IGREJA_DETAILS_SUCCESS,
            payload: igreja,
        });
    } catch (error) {
        dispatch({
            type: IGREJA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createIgreja = (igreja) => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdIgreja = await igrejaService.createIgreja(igreja, userInfo.token);

        dispatch({
            type: IGREJA_CREATE_SUCCESS,
            payload: createdIgreja,
        });
    } catch (error) {
        dispatch({
            type: IGREJA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateIgreja = (igreja) => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedIgreja = await igrejaService.updateIgreja(
            igreja,
            userInfo.token
        );

        dispatch({
            type: IGREJA_UPDATE_SUCCESS,
            payload: updatedIgreja,
        });
    } catch (error) {
        dispatch({
            type: IGREJA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteIgreja = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: IGREJA_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await igrejaService.deleteIgreja(id, userInfo.token);

        dispatch({ type: IGREJA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: IGREJA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
