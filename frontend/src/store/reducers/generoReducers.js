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

export const generoListReducer = (state = { generos: [] }, action) => {
    switch (action.type) {
        case GENERO_LIST_REQUEST:
            return { loading: true, generos: [] };
        case GENERO_LIST_SUCCESS:
            return { loading: false, generos: action.payload };
        case GENERO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const generoDetailsReducer = (state = { genero: {} }, action) => {
    switch (action.type) {
        case GENERO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case GENERO_DETAILS_SUCCESS:
            return { loading: false, genero: action.payload };
        case GENERO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const generoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case GENERO_CREATE_REQUEST:
            return { loading: true };
        case GENERO_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                genero: action.payload,
            };
        case GENERO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case GENERO_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const generoUpdateReducer = (state = { genero: {} }, action) => {
    switch (action.type) {
        case GENERO_UPDATE_REQUEST:
            return { loading: true };
        case GENERO_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                genero: action.payload,
            };
        case GENERO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case GENERO_UPDATE_RESET:
            return { genero: {} };
        default:
            return state;
    }
};

export const generoDeleteReducer = (state = { genero: {} }, action) => {
    switch (action.type) {
        case GENERO_DELETE_REQUEST:
            return { loading: true };
        case GENERO_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case GENERO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
