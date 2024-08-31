import {
    NOTICIA_LIST_REQUEST,
    NOTICIA_CREATE_FAIL,
    NOTICIA_CREATE_REQUEST,
    NOTICIA_CREATE_RESET,
    NOTICIA_CREATE_SUCCESS,
    NOTICIA_DELETE_FAIL,
    NOTICIA_DELETE_REQUEST,
    NOTICIA_DELETE_SUCCESS,
    NOTICIA_DETAILS_FAIL,
    NOTICIA_DETAILS_REQUEST,
    NOTICIA_DETAILS_SUCCESS,
    NOTICIA_LIST_FAIL,
    NOTICIA_LIST_SUCCESS,
    NOTICIA_UPDATE_FAIL,
    NOTICIA_UPDATE_REQUEST,
    NOTICIA_UPDATE_RESET,
    NOTICIA_UPDATE_SUCCESS,
} from "../constants/noticiaConstants";

export const noticiaListReducer = (state = { noticias: [] }, action) => {
    switch (action.type) {
        case NOTICIA_LIST_REQUEST:
            return { loading: true, noticias: [] };
        case NOTICIA_LIST_SUCCESS:
            return { loading: false, noticias: action.payload };
        case NOTICIA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const noticiaDetailsReducer = (state = { noticia: {} }, action) => {
    switch (action.type) {
        case NOTICIA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case NOTICIA_DETAILS_SUCCESS:
            return { loading: false, noticia: action.payload };
        case NOTICIA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const noticiaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTICIA_CREATE_REQUEST:
            return { loading: true };
        case NOTICIA_CREATE_SUCCESS:
            return { loading: false, success: true, noticia: action.payload };
        case NOTICIA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case NOTICIA_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const noticiaUpdateReducer = (state = { noticia: {} }, action) => {
    switch (action.type) {
        case NOTICIA_UPDATE_REQUEST:
            return { loading: true };
        case NOTICIA_UPDATE_SUCCESS:
            return { loading: false, success: true, noticia: action.payload };
        case NOTICIA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case NOTICIA_UPDATE_RESET:
            return { noticia: {} };
        default:
            return state;
    }
};

export const noticiaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTICIA_DELETE_REQUEST:
            return { loading: true };
        case NOTICIA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case NOTICIA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
