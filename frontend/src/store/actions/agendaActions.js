import {
    AGENDA_CREATE_FAIL,
    AGENDA_CREATE_REQUEST,
    AGENDA_CREATE_RESET,
    AGENDA_CREATE_SUCCESS,
    AGENDA_DELETE_FAIL,
    AGENDA_DELETE_REQUEST,
    AGENDA_DELETE_SUCCESS,
    AGENDA_DETAILS_FAIL,
    AGENDA_DETAILS_REQUEST,
    AGENDA_DETAILS_SUCCESS,
    AGENDA_LIST_FAIL,
    AGENDA_LIST_REQUEST,
    AGENDA_LIST_SUCCESS,
    AGENDA_UPDATE_FAIL,
    AGENDA_UPDATE_REQUEST,
    AGENDA_UPDATE_RESET,
    AGENDA_UPDATE_SUCCESS,
} from "../constants/agendaConstants";
import agendaService from "../../services/api/agendaService";

export const listAgendas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: AGENDA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const agendas = await agendaService.listAgendas(userInfo.token);

        dispatch({
            type: AGENDA_LIST_SUCCESS,
            payload: agendas,
        });
    } catch (error) {
        dispatch({
            type: AGENDA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getAgendaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: AGENDA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const agenda = await agendaService.getAgendaDetails(id, userInfo.token);

        dispatch({
            type: AGENDA_DETAILS_SUCCESS,
            payload: agenda,
        });
    } catch (error) {
        dispatch({
            type: AGENDA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createAgenda = (agenda) => async (dispatch, getState) => {
    try {
        dispatch({ type: AGENDA_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdAgenda = await agendaService.createAgenda(
            agenda,
            userInfo.token
        );

        dispatch({
            type: AGENDA_CREATE_SUCCESS,
            payload: createdAgenda,
        });
    } catch (error) {
        dispatch({
            type: AGENDA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateAgenda = (agenda) => async (dispatch, getState) => {
    try {
        dispatch({ type: AGENDA_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedAgenda = await agendaService.updateAgenda(
            agenda,
            userInfo.token
        );

        dispatch({
            type: AGENDA_UPDATE_SUCCESS,
            payload: updatedAgenda,
        });
    } catch (error) {
        dispatch({
            type: AGENDA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteAgenda = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: AGENDA_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await agendaService.deleteAgenda(id, userInfo.token);

        dispatch({ type: AGENDA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: AGENDA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
