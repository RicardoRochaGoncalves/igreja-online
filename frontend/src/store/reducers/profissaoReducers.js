import {
    PROFISSAO_LIST_REQUEST,
    PROFISSAO_LIST_SUCCESS,
    PROFISSAO_LIST_FAIL,
    PROFISSAO_CREATE_FAIL,
    PROFISSAO_CREATE_REQUEST,
    PROFISSAO_CREATE_RESET,
    PROFISSAO_CREATE_SUCCESS,
    PROFISSAO_DELETE_FAIL,
    PROFISSAO_DELETE_REQUEST,
    PROFISSAO_DELETE_SUCCESS,
    PROFISSAO_DETAILS_FAIL,
    PROFISSAO_DETAILS_REQUEST,
    PROFISSAO_DETAILS_SUCCESS,
    PROFISSAO_UPDATE_FAIL,
    PROFISSAO_UPDATE_REQUEST,
    PROFISSAO_UPDATE_RESET,
    PROFISSAO_UPDATE_SUCCESS,
} from "../constants/profissaoConstants";

export const profissaoListReducer = (state = { profissoes: [] }, action) => {
    switch (action.type) {
        case PROFISSAO_LIST_REQUEST:
            return { loading: true, profissoes: [] };
        case PROFISSAO_LIST_SUCCESS:
            return { loading: false, profissoes: action.payload };
        case PROFISSAO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const profissaoDetailsReducer = (state = { profissao: {} }, action) => {
    switch (action.type) {
        case PROFISSAO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PROFISSAO_DETAILS_SUCCESS:
            return { loading: false, profissao: action.payload };
        case PROFISSAO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const profissaoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFISSAO_CREATE_REQUEST:
            return { loading: true };
        case PROFISSAO_CREATE_SUCCESS:
            return { loading: false, success: true, profissao: action.payload };
        case PROFISSAO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PROFISSAO_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const profissaoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFISSAO_UPDATE_REQUEST:
            return { loading: true };
        case PROFISSAO_UPDATE_SUCCESS:
            return { loading: false, success: true, profissao: action.payload };
        case PROFISSAO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PROFISSAO_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const profissaoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFISSAO_DELETE_REQUEST:
            return { loading: true };
        case PROFISSAO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PROFISSAO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
