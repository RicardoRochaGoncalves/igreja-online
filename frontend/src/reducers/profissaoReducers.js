import {
    PROFISSAO_LIST_REQUEST,
    PROFISSAO_LIST_SUCCESS,
    PROFISSAO_LIST_FAIL,
    PROFISSAO_DELETE_REQUEST,
    PROFISSAO_DELETE_SUCCESS,
    PROFISSAO_DELETE_FAIL,
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
}