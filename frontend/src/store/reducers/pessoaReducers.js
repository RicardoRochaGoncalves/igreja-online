import {
    PESSOA_LIST_REQUEST,
    PESSOA_LIST_SUCCESS,
    PESSOA_LIST_FAIL,
    PESSOA_DETAILS_REQUEST,
    PESSOA_DETAILS_SUCCESS,
    PESSOA_DETAILS_FAIL,
    PESSOA_CREATE_REQUEST,
    PESSOA_CREATE_SUCCESS,
    PESSOA_CREATE_FAIL,
    PESSOA_CREATE_RESET,
    PESSOA_UPDATE_REQUEST,
    PESSOA_UPDATE_SUCCESS,
    PESSOA_UPDATE_FAIL,
    PESSOA_UPDATE_RESET,
    PESSOA_DELETE_REQUEST,
    PESSOA_DELETE_SUCCESS,
    PESSOA_DELETE_FAIL,
} from "../constants/pessoaConstants";

export const pessoaListReducer = (state = { pessoas: [] }, action) => {
    switch (action.type) {
        case PESSOA_LIST_REQUEST:
            return { loading: true, pessoas: [] };
        case PESSOA_LIST_SUCCESS:
            return { loading: false, pessoas: action.payload };
        case PESSOA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const pessoaDetailsReducer = (state = { pessoa: {} }, action) => {
    switch (action.type) {
        case PESSOA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PESSOA_DETAILS_SUCCESS:
            return { loading: false, pessoa: action.payload };
        case PESSOA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const pessoaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PESSOA_CREATE_REQUEST:
            return { loading: true };
        case PESSOA_CREATE_SUCCESS:
            return { loading: false, success: true, pessoa: action.payload };
        case PESSOA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PESSOA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const pessoaUpdateReducer = (state = { pessoa: {} }, action) => {
    switch (action.type) {
        case PESSOA_UPDATE_REQUEST:
            return { loading: true };
        case PESSOA_UPDATE_SUCCESS:
            return { loading: false, success: true, pessoa: action.payload };
        case PESSOA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PESSOA_UPDATE_RESET:
            return { pessoa: {} };
        default:
            return state;
    }
};

export const pessoaDeleteReducer = (state = { pessoa: {} }, action) => {
    switch (action.type) {
        case PESSOA_DELETE_REQUEST:
            return { loading: true };
        case PESSOA_DELETE_SUCCESS:
            return { loading: false, success: true, pessoa: action.payload };
        case PESSOA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
