import {
    CATEGORIA_LIST_REQUEST,
    CATEGORIA_LIST_SUCCESS,
    CATEGORIA_LIST_FAIL,
    CATEGORIA_DELETE_REQUEST,
    CATEGORIA_DELETE_SUCCESS,
    CATEGORIA_DELETE_FAIL,
    CATEGORIA_DETAILS_REQUEST,
    CATEGORIA_DETAILS_SUCCESS,
    CATEGORIA_DETAILS_FAIL,
    CATEGORIA_UPDATE_REQUEST,
    CATEGORIA_UPDATE_SUCCESS,
    CATEGORIA_UPDATE_FAIL,
    CATEGORIA_UPDATE_RESET,
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

export const categoriaDetailsReducer = (state = { categoria: {} }, action) => {
    switch (action.type) {
        case CATEGORIA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CATEGORIA_DETAILS_SUCCESS:
            return { loading: false, categoria: action.payload };
        case CATEGORIA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const categoriaUpdateReducer = (state = { categoria: {} }, action) => {
    switch (action.type) {
        case CATEGORIA_UPDATE_REQUEST:
            return { loading: true };
        case CATEGORIA_UPDATE_SUCCESS:
            return { loading: false, success: true, categoria: action.payload };
        case CATEGORIA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_UPDATE_RESET:
            return { categoria: {} };
        default:
            return state;
    }
}