import {
    CATEGORIA_PESSOA_CREATE_FAIL,
    CATEGORIA_PESSOA_CREATE_REQUEST,
    CATEGORIA_PESSOA_CREATE_RESET,
    CATEGORIA_PESSOA_CREATE_SUCCESS,
    CATEGORIA_PESSOA_DELETE_FAIL,
    CATEGORIA_PESSOA_DELETE_REQUEST,
    CATEGORIA_PESSOA_DELETE_SUCCESS,
    CATEGORIA_PESSOA_DETAILS_FAIL,
    CATEGORIA_PESSOA_DETAILS_REQUEST,
    CATEGORIA_PESSOA_DETAILS_SUCCESS,
    CATEGORIA_PESSOA_LIST_FAIL,
    CATEGORIA_PESSOA_LIST_REQUEST,
    CATEGORIA_PESSOA_LIST_SUCCESS,
    CATEGORIA_PESSOA_UPDATE_FAIL,
    CATEGORIA_PESSOA_UPDATE_REQUEST,
    CATEGORIA_PESSOA_UPDATE_RESET,
    CATEGORIA_PESSOA_UPDATE_SUCCESS,
} from "../constants/categoriaPessoaConstants";

export const categoriaPessoaListReducer = (
    state = { categoriasPessoa: [] },
    action
) => {
    switch (action.type) {
        case CATEGORIA_PESSOA_LIST_REQUEST:
            return { loading: true, categoriasPessoa: [] };
        case CATEGORIA_PESSOA_LIST_SUCCESS:
            return { loading: false, categoriasPessoa: action.payload };
        case CATEGORIA_PESSOA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoriaPessoaDetailsReducer = (
    state = { categoriaPessoa: {} },
    action
) => {
    switch (action.type) {
        case CATEGORIA_PESSOA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CATEGORIA_PESSOA_DETAILS_SUCCESS:
            return { loading: false, categoriaPessoa: action.payload };
        case CATEGORIA_PESSOA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoriaPessoaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_PESSOA_CREATE_REQUEST:
            return { loading: true };
        case CATEGORIA_PESSOA_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                categoriaPessoa: action.payload,
            };
        case CATEGORIA_PESSOA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_PESSOA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const categoriaPessoaUpdateReducer = (
    state = { categoriaPessoa: {} },
    action
) => {
    switch (action.type) {
        case CATEGORIA_PESSOA_UPDATE_REQUEST:
            return { loading: true };
        case CATEGORIA_PESSOA_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                categoriaPessoa: action.payload,
            };
        case CATEGORIA_PESSOA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_PESSOA_UPDATE_RESET:
            return { categoriaPessoa: {} };
        default:
            return state;
    }
};

export const categoriaPessoaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_PESSOA_DELETE_REQUEST:
            return { loading: true };
        case CATEGORIA_PESSOA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CATEGORIA_PESSOA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
