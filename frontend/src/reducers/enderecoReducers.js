import {
    ENDERECO_LIST_REQUEST,
    ENDERECO_LIST_SUCCESS,
    ENDERECO_LIST_FAIL,
    ENDERECO_DELETE_REQUEST,
    ENDERECO_DELETE_SUCCESS,
    ENDERECO_DELETE_FAIL,
    ENDERECO_DETAILS_REQUEST,
    ENDERECO_DETAILS_SUCCESS,
    ENDERECO_DETAILS_FAIL,
    ENDERECO_UPDATE_REQUEST,
    ENDERECO_UPDATE_SUCCESS,
    ENDERECO_UPDATE_FAIL,
    ENDERECO_UPDATE_RESET,
    ENDERECO_CREATE_REQUEST,
    ENDERECO_CREATE_SUCCESS,
    ENDERECO_CREATE_FAIL,
    ENDERECO_CREATE_RESET,
} from "../constants/enderecoConstants";

export const enderecoListReducer = (state = { enderecos: [] }, action) => {
    switch (action.type) {
        case ENDERECO_LIST_REQUEST:
            return { loading: true, enderecos: [] };
        case ENDERECO_LIST_SUCCESS:
            return { loading: false, enderecos: action.payload };
        case ENDERECO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const enderecoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ENDERECO_DELETE_REQUEST:
            return { loading: true };
        case ENDERECO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ENDERECO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const enderecoDetailsReducer = (state = { endereco: {} }, action) => {
    switch (action.type) {
        case ENDERECO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ENDERECO_DETAILS_SUCCESS:
            return { loading: false, endereco: action.payload };
        case ENDERECO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const enderecoUpdateReducer = (state = { endereco: {} }, action) => {
    switch (action.type) {
        case ENDERECO_UPDATE_REQUEST:
            return { loading: true };
        case ENDERECO_UPDATE_SUCCESS:
            return { loading: false, success: true, endereco: action.payload };
        case ENDERECO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ENDERECO_UPDATE_RESET:
            return { endereco: {} };
        default:
            return state;
    }
}

export const enderecoCreateReducer = (state = { endereco: {} }, action) => {
    switch (action.type) {
        case ENDERECO_CREATE_REQUEST:
            return { loading: true };
        case ENDERECO_CREATE_SUCCESS:
            return { loading: false, success: true, endereco: action.payload };
        case ENDERECO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ENDERECO_CREATE_RESET:
            return { endereco: {} };
        default:
            return state;
    }
}
