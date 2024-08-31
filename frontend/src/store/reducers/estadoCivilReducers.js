import {
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
    ESTADO_CIVIL_LIST_FAIL,
    ESTADO_CIVIL_LIST_REQUEST,
    ESTADO_CIVIL_LIST_SUCCESS,
    ESTADO_CIVIL_UPDATE_FAIL,
    ESTADO_CIVIL_UPDATE_REQUEST,
    ESTADO_CIVIL_UPDATE_RESET,
    ESTADO_CIVIL_UPDATE_SUCCESS,
} from "../constants/estadoCivilConstants";

export const estadoCivilListReducer = (
    state = { estadosCivis: [] },
    action
) => {
    switch (action.type) {
        case ESTADO_CIVIL_LIST_REQUEST:
            return { loading: true, estadosCivis: [] };
        case ESTADO_CIVIL_LIST_SUCCESS:
            return { loading: false, estadosCivis: action.payload };
        case ESTADO_CIVIL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const estadoCivilDetailsReducer = (
    state = { estadoCivil: {} },
    action
) => {
    switch (action.type) {
        case ESTADO_CIVIL_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ESTADO_CIVIL_DETAILS_SUCCESS:
            return { loading: false, estadoCivil: action.payload };
        case ESTADO_CIVIL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const estadoCivilCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ESTADO_CIVIL_CREATE_REQUEST:
            return { loading: true };
        case ESTADO_CIVIL_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                estadoCivil: action.payload,
            };
        case ESTADO_CIVIL_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ESTADO_CIVIL_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const estadoCivilUpdateReducer = (
    state = { estadoCivil: {} },
    action
) => {
    switch (action.type) {
        case ESTADO_CIVIL_UPDATE_REQUEST:
            return { loading: true };
        case ESTADO_CIVIL_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                estadoCivil: action.payload,
            };
        case ESTADO_CIVIL_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ESTADO_CIVIL_UPDATE_RESET:
            return { estadoCivil: {} };
        default:
            return state;
    }
};

export const estadoCivilDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ESTADO_CIVIL_DELETE_REQUEST:
            return { loading: true };
        case ESTADO_CIVIL_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ESTADO_CIVIL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
