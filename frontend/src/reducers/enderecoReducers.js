import {
    ENDERECO_LIST_REQUEST,
    ENDERECO_LIST_SUCCESS,
    ENDERECO_LIST_FAIL,
    ENDERECO_DELETE_REQUEST,
    ENDERECO_DELETE_SUCCESS,
    ENDERECO_DELETE_FAIL,
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