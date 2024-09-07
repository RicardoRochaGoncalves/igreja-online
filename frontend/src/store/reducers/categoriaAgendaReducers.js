import {
    CATEGORIA_AGENDA_LIST_REQUEST,
    CATEGORIA_AGENDA_LIST_SUCCESS,
    CATEGORIA_AGENDA_LIST_FAIL,
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
    CATEGORIA_AGENDA_UPDATE_FAIL,
    CATEGORIA_AGENDA_UPDATE_REQUEST,
    CATEGORIA_AGENDA_UPDATE_RESET,
    CATEGORIA_AGENDA_UPDATE_SUCCESS,
} from "../constants/categoriaAgendaConstants";

export const categoriaAgendaListReducer = (
    state = { categoriasAgenda: [] },
    action
) => {
    switch (action.type) {
        case CATEGORIA_AGENDA_LIST_REQUEST:
            return { loading: true, categoriasAgenda: [] };
        case CATEGORIA_AGENDA_LIST_SUCCESS:
            return { loading: false, categoriasAgenda: action.payload };
        case CATEGORIA_AGENDA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const categoriaAgendaDetailsReducer = (
    state = { categoriaAgenda: {} },
    action
) => {
    switch (action.type) {
        case CATEGORIA_AGENDA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CATEGORIA_AGENDA_DETAILS_SUCCESS:
            return { loading: false, categoriaAgenda: action.payload };
        case CATEGORIA_AGENDA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const categoriaAgendaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_AGENDA_CREATE_REQUEST:
            return { loading: true };
        case CATEGORIA_AGENDA_CREATE_SUCCESS:
            return { loading: false, success: true, categoriaAgenda: action.payload };
        case CATEGORIA_AGENDA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_AGENDA_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const categoriaAgendaUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_AGENDA_UPDATE_REQUEST:
            return { loading: true };
        case CATEGORIA_AGENDA_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case CATEGORIA_AGENDA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_AGENDA_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const categoriaAgendaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_AGENDA_DELETE_REQUEST:
            return { loading: true };
        case CATEGORIA_AGENDA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CATEGORIA_AGENDA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


