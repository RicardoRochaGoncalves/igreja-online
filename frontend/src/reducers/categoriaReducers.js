import {
    CATEGORIA_LIST_REQUEST,
    CATEGORIA_LIST_SUCCESS,
    CATEGORIA_LIST_FAIL,
    CATEGORIA_DELETE_REQUEST,
    CATEGORIA_DELETE_SUCCESS,
    CATEGORIA_DELETE_FAIL,
} from "../constants/categoriaConstants";

export const categoriaListReducer = (state = { categorias: [] }, action) => {
    switch (action.type) {
        case CATEGORIA_LIST_REQUEST:
            return { loading: true, categorias: [] };
        case CATEGORIA_LIST_SUCCESS:
            return { loading: false, categorias: action.payload };
        case CATEGORIA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoriaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_DELETE_REQUEST:
            return { loading: true };
        case CATEGORIA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CATEGORIA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
