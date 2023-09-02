import {
    PESSOA_LIST_REQUEST,
    PESSOA_LIST_SUCCESS,
    PESSOA_LIST_FAIL,
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

export const pessoaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PESSOA_DELETE_REQUEST:
            return { loading: true };
        case PESSOA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PESSOA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
