import {
    EVENTO_AO_VIVO_LIST_REQUEST,
    EVENTO_AO_VIVO_LIST_SUCCESS,
    EVENTO_AO_VIVO_LIST_FAIL,
    EVENTO_AO_VIVO_DETAILS_REQUEST,
    EVENTO_AO_VIVO_DETAILS_SUCCESS,
    EVENTO_AO_VIVO_DETAILS_FAIL,
    EVENTO_AO_VIVO_CREATE_REQUEST,
    EVENTO_AO_VIVO_CREATE_SUCCESS,
    EVENTO_AO_VIVO_CREATE_FAIL,
    EVENTO_AO_VIVO_CREATE_RESET,
    EVENTO_AO_VIVO_UPDATE_REQUEST,
    EVENTO_AO_VIVO_UPDATE_SUCCESS,
    EVENTO_AO_VIVO_UPDATE_FAIL,
    EVENTO_AO_VIVO_UPDATE_RESET,
    EVENTO_AO_VIVO_DELETE_REQUEST,
    EVENTO_AO_VIVO_DELETE_SUCCESS,
    EVENTO_AO_VIVO_DELETE_FAIL,
} from "../constants/eventoAoVivoConstants";

export const eventoAoVivoListReducer = (state = { eventosAoVivo: [] }, action) => {
    switch (action.type) {
        case EVENTO_AO_VIVO_LIST_REQUEST:
            return { loading: true, eventosAoVivo: [] };
        case EVENTO_AO_VIVO_LIST_SUCCESS:
            return { loading: false, eventosAoVivo: action.payload };
        case EVENTO_AO_VIVO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const eventoAoVivoDetailsReducer = (state = { eventoAoVivo: {} }, action) => {
    switch (action.type) {
        case EVENTO_AO_VIVO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case EVENTO_AO_VIVO_DETAILS_SUCCESS:
            return { loading: false, eventoAoVivo: action.payload };
        case EVENTO_AO_VIVO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const eventoAoVivoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENTO_AO_VIVO_CREATE_REQUEST:
            return { loading: true };
        case EVENTO_AO_VIVO_CREATE_SUCCESS:
            return { loading: false, success: true, eventoAoVivo: action.payload };
        case EVENTO_AO_VIVO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case EVENTO_AO_VIVO_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const eventoAoVivoUpdateReducer = (state = { eventoAoVivo: {} }, action) => {
    switch (action.type) {
        case EVENTO_AO_VIVO_UPDATE_REQUEST:
            return { loading: true };
        case EVENTO_AO_VIVO_UPDATE_SUCCESS:
            return { loading: false, success: true, eventoAoVivo: action.payload };
        case EVENTO_AO_VIVO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case EVENTO_AO_VIVO_UPDATE_RESET:
            return { eventoAoVivo: {} };
        default:
            return state;
    }
}

export const eventoAoVivoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENTO_AO_VIVO_DELETE_REQUEST:
            return { loading: true };
        case EVENTO_AO_VIVO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case EVENTO_AO_VIVO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}



