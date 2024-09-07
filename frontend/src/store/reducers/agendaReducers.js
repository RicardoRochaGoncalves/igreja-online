import {
    AGENDA_LIST_REQUEST,
    AGENDA_LIST_SUCCESS,
    AGENDA_LIST_FAIL,
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
    AGENDA_UPDATE_FAIL,
    AGENDA_UPDATE_REQUEST,
    AGENDA_UPDATE_RESET,
    AGENDA_UPDATE_SUCCESS,
} from "../constants/agendaConstants";

export const agendaListReducer = (state = { agendas: [] }, action) => {
    switch (action.type) {
        case AGENDA_LIST_REQUEST:
            return { loading: true, agendas: [] };
        case AGENDA_LIST_SUCCESS:
            return { loading: false, agendas: action.payload };
        case AGENDA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const agendaDetailsReducer = (state = { agenda: {} }, action) => {
    switch (action.type) {
        case AGENDA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case AGENDA_DETAILS_SUCCESS:
            return { loading: false, agenda: action.payload };
        case AGENDA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const agendaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case AGENDA_CREATE_REQUEST:
            return { loading: true };
        case AGENDA_CREATE_SUCCESS:
            return { loading: false, success: true, agenda: action.payload };
        case AGENDA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case AGENDA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const agendaUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case AGENDA_UPDATE_REQUEST:
            return { loading: true };
        case AGENDA_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case AGENDA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case AGENDA_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const agendaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case AGENDA_DELETE_REQUEST:
            return { loading: true };
        case AGENDA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case AGENDA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


