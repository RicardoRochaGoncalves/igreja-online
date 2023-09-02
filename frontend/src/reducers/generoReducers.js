import {
    GENERO_LIST_REQUEST,
    GENERO_LIST_SUCCESS,
    GENERO_LIST_FAIL,
    GENERO_DELETE_REQUEST,
    GENERO_DELETE_SUCCESS,
    GENERO_DELETE_FAIL,
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

export const generoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case GENERO_DELETE_REQUEST:
            return { loading: true };
        case GENERO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case GENERO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}