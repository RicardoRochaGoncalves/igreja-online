import {
    IGREJA_LIST_REQUEST,
    IGREJA_LIST_SUCCESS,
    IGREJA_LIST_FAIL,
    IGREJA_DETAILS_REQUEST,
    IGREJA_DETAILS_SUCCESS,
    IGREJA_DETAILS_FAIL,
    IGREJA_CREATE_REQUEST,
    IGREJA_CREATE_SUCCESS,
    IGREJA_CREATE_FAIL,
    IGREJA_CREATE_RESET,
    IGREJA_UPDATE_REQUEST,
    IGREJA_UPDATE_SUCCESS,
    IGREJA_UPDATE_FAIL,
    IGREJA_UPDATE_RESET,
    IGREJA_DELETE_REQUEST,
    IGREJA_DELETE_SUCCESS,
    IGREJA_DELETE_FAIL,
} from "../constants/igrejaConstants";

export const igrejaListReducer = (state = { igrejas: [] }, action) => {
    switch (action.type) {
        case IGREJA_LIST_REQUEST:
            return { loading: true, igrejas: [] };
        case IGREJA_LIST_SUCCESS:
            return { loading: false, igrejas: action.payload };
        case IGREJA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const igrejaDetailsReducer = (state = { igreja: {} }, action) => {
    switch (action.type) {
        case IGREJA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case IGREJA_DETAILS_SUCCESS:
            return { loading: false, igreja: action.payload };
        case IGREJA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const igrejaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case IGREJA_CREATE_REQUEST:
            return { loading: true };
        case IGREJA_CREATE_SUCCESS:
            return { loading: false, success: true, igreja: action.payload };
        case IGREJA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case IGREJA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const igrejaUpdateReducer = (state = { igreja: {} }, action) => {
    switch (action.type) {
        case IGREJA_UPDATE_REQUEST:
            return { loading: true };
        case IGREJA_UPDATE_SUCCESS:
            return { loading: false, success: true, igreja: action.payload };
        case IGREJA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case IGREJA_UPDATE_RESET:
            return { igreja: {} };
        default:
            return state;
    }
};

export const igrejaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case IGREJA_DELETE_REQUEST:
            return { loading: true };
        case IGREJA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case IGREJA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
