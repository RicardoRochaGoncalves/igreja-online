import {
    CATEGORIA_NOTICIA_LIST_FAIL,
    CATEGORIA_NOTICIA_LIST_REQUEST,
    CATEGORIA_NOTICIA_LIST_SUCCESS,
    CATEGORIA_NOTICIA_DETAILS_REQUEST,
    CATEGORIA_NOTICIA_DETAILS_SUCCESS,
    CATEGORIA_NOTICIA_DETAILS_FAIL,
    CATEGORIA_NOTICIA_CREATE_REQUEST,
    CATEGORIA_NOTICIA_CREATE_SUCCESS,
    CATEGORIA_NOTICIA_CREATE_FAIL,
    CATEGORIA_NOTICIA_CREATE_RESET,
    CATEGORIA_NOTICIA_UPDATE_REQUEST,
    CATEGORIA_NOTICIA_UPDATE_SUCCESS,
    CATEGORIA_NOTICIA_UPDATE_FAIL,
    CATEGORIA_NOTICIA_UPDATE_RESET,
    CATEGORIA_NOTICIA_DELETE_REQUEST,
    CATEGORIA_NOTICIA_DELETE_SUCCESS,
    CATEGORIA_NOTICIA_DELETE_FAIL,
} from "../constants/categoriaNoticiaConstants";

export const categoriaNoticiaListReducer = (
    state = { categoriasNoticia: [] },
    action
) => {
    switch (action.type) {
        case CATEGORIA_NOTICIA_LIST_REQUEST:
            return { loading: true, categoriasNoticia: [] };
        case CATEGORIA_NOTICIA_LIST_SUCCESS:
            return { loading: false, categoriasNoticia: action.payload };
        case CATEGORIA_NOTICIA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoriaNoticiaDetailsReducer = (
    state = { categoriaNoticia: {} },
    action
) => {
    switch (action.type) {
        case CATEGORIA_NOTICIA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CATEGORIA_NOTICIA_DETAILS_SUCCESS:
            return { loading: false, categoriaNoticia: action.payload };
        case CATEGORIA_NOTICIA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoriaNoticiaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_NOTICIA_CREATE_REQUEST:
            return { loading: true };
        case CATEGORIA_NOTICIA_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                categoriaNoticia: action.payload,
            };
        case CATEGORIA_NOTICIA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_NOTICIA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const categoriaNoticiaUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_NOTICIA_UPDATE_REQUEST:
            return { loading: true };
        case CATEGORIA_NOTICIA_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                categoriaNoticia: action.payload,
            };
        case CATEGORIA_NOTICIA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORIA_NOTICIA_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const categoriaNoticiaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORIA_NOTICIA_DELETE_REQUEST:
            return { loading: true };
        case CATEGORIA_NOTICIA_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case CATEGORIA_NOTICIA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
