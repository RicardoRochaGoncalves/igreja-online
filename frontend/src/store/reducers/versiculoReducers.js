import {
    VERSICULO_CREATE_FAIL,
    VERSICULO_CREATE_REQUEST,
    VERSICULO_CREATE_RESET,
    VERSICULO_CREATE_SUCCESS,
    VERSICULO_DELETE_FAIL,
    VERSICULO_DELETE_REQUEST,
    VERSICULO_DELETE_SUCCESS,
    VERSICULO_DETAILS_FAIL,
    VERSICULO_DETAILS_REQUEST,
    VERSICULO_DETAILS_SUCCESS,
    VERSICULO_LIST_FAIL,
    VERSICULO_LIST_REQUEST,
    VERSICULO_LIST_SUCCESS,
    VERSICULO_UPDATE_FAIL,
    VERSICULO_UPDATE_REQUEST,
    VERSICULO_UPDATE_RESET,
    VERSICULO_UPDATE_SUCCESS,
} from "../constants/versiculoConstants";

export const versiculoListReducer = (state = { versiculos: [] }, action) => {
    switch (action.type) {
        case VERSICULO_LIST_REQUEST:
            return { loading: true, versiculos: [] };
        case VERSICULO_LIST_SUCCESS:
            return { loading: false, versiculos: action.payload };
        case VERSICULO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const versiculoDetailsReducer = (state = { versiculo: {} }, action) => {
    switch (action.type) {
        case VERSICULO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case VERSICULO_DETAILS_SUCCESS:
            return { loading: false, versiculo: action.payload };
        case VERSICULO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const versiculoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case VERSICULO_CREATE_REQUEST:
            return { loading: true };
        case VERSICULO_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                versiculo: action.payload,
            };
        case VERSICULO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case VERSICULO_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const versiculoUpdateReducer = (state = { versiculo: {} }, action) => {
    switch (action.type) {
        case VERSICULO_UPDATE_REQUEST:
            return { loading: true };
        case VERSICULO_UPDATE_SUCCESS:
            return { loading: false, success: true, versiculo: action.payload };
        case VERSICULO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case VERSICULO_UPDATE_RESET:
            return { versiculo: {} };
        default:
            return state;
    }
};

export const versiculoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case VERSICULO_DELETE_REQUEST:
            return { loading: true };
        case VERSICULO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case VERSICULO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
