import {
    EVENTO_AO_VIVO_LIST_REQUEST,
    EVENTO_AO_VIVO_CREATE_FAIL,
    EVENTO_AO_VIVO_CREATE_REQUEST,
    EVENTO_AO_VIVO_CREATE_RESET,
    EVENTO_AO_VIVO_CREATE_SUCCESS,
    EVENTO_AO_VIVO_DELETE_FAIL,
    EVENTO_AO_VIVO_DELETE_REQUEST,
    EVENTO_AO_VIVO_DELETE_SUCCESS,
    EVENTO_AO_VIVO_DETAILS_FAIL,
    EVENTO_AO_VIVO_DETAILS_REQUEST,
    EVENTO_AO_VIVO_DETAILS_SUCCESS,
    EVENTO_AO_VIVO_LIST_FAIL,
    EVENTO_AO_VIVO_LIST_SUCCESS,
    EVENTO_AO_VIVO_UPDATE_FAIL,
    EVENTO_AO_VIVO_UPDATE_REQUEST,
    EVENTO_AO_VIVO_UPDATE_RESET,
    EVENTO_AO_VIVO_UPDATE_SUCCESS,
} from "../constants/eventoAoVivoConstants";
import eventoAoVivoService from "../../services/api/eventoAoVivoService";

export const listEventosAoVivo = () => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENTO_AO_VIVO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const eventosAoVivo = await eventoAoVivoService.listEventosAoVivo(
            userInfo.token
        );

        dispatch({
            type: EVENTO_AO_VIVO_LIST_SUCCESS,
            payload: eventosAoVivo,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_AO_VIVO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getEventoAoVivoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENTO_AO_VIVO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const eventoAoVivo = await eventoAoVivoService.getEventoAoVivoDetails(
            id,
            userInfo.token
        );

        dispatch({
            type: EVENTO_AO_VIVO_DETAILS_SUCCESS,
            payload: eventoAoVivo,
        });
    } catch (error) {
        dispatch({
            type: EVENTO_AO_VIVO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createEventoAoVivo =
    (eventoAoVivo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: EVENTO_AO_VIVO_CREATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const createdEventoAoVivo =
                await eventoAoVivoService.createEventoAoVivo(
                    eventoAoVivo,
                    userInfo.token
                );

            dispatch({
                type: EVENTO_AO_VIVO_CREATE_SUCCESS,
                payload: createdEventoAoVivo,
            });
        } catch (error) {
            dispatch({
                type: EVENTO_AO_VIVO_CREATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const updateEventoAoVivo =
    (eventoAoVivo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: EVENTO_AO_VIVO_UPDATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const updatedEventoAoVivo =
                await eventoAoVivoService.updateEventoAoVivo(
                    eventoAoVivo,
                    userInfo.token
                );

            dispatch({
                type: EVENTO_AO_VIVO_UPDATE_SUCCESS,
                payload: updatedEventoAoVivo,
            });
        } catch (error) {
            dispatch({
                type: EVENTO_AO_VIVO_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const deleteEventoAoVivo = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EVENTO_AO_VIVO_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        await eventoAoVivoService.deleteEventoAoVivo(id, userInfo.token);

        dispatch({ type: EVENTO_AO_VIVO_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: EVENTO_AO_VIVO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
