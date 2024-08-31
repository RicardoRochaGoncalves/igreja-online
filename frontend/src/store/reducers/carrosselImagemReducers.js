import {
    CARROSSEL_IMAGEM_LIST_REQUEST,
    CARROSSEL_IMAGEM_LIST_SUCCESS,
    CARROSSEL_IMAGEM_LIST_FAIL,
    CARROSSEL_IMAGEM_CREATE_FAIL,
    CARROSSEL_IMAGEM_CREATE_REQUEST,
    CARROSSEL_IMAGEM_CREATE_RESET,
    CARROSSEL_IMAGEM_CREATE_SUCCESS,
    CARROSSEL_IMAGEM_DELETE_FAIL,
    CARROSSEL_IMAGEM_DELETE_REQUEST,
    CARROSSEL_IMAGEM_DELETE_SUCCESS,
    CARROSSEL_IMAGEM_DETAILS_FAIL,
    CARROSSEL_IMAGEM_DETAILS_REQUEST,
    CARROSSEL_IMAGEM_DETAILS_SUCCESS,
    CARROSSEL_IMAGEM_UPDATE_FAIL,
    CARROSSEL_IMAGEM_UPDATE_REQUEST,
    CARROSSEL_IMAGEM_UPDATE_RESET,
    CARROSSEL_IMAGEM_UPDATE_SUCCESS,
} from "../constants/carrosselImagemConstants";

export const carrosselImagemListReducer = (
    state = { carrosselImagens: [] },
    action
) => {
    switch (action.type) {
        case CARROSSEL_IMAGEM_LIST_REQUEST:
            return { loading: true, carrosselImagens: [] };
        case CARROSSEL_IMAGEM_LIST_SUCCESS:
            return { loading: false, carrosselImagens: action.payload };
        case CARROSSEL_IMAGEM_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const carrosselImagemDetailsReducer = (
    state = { carrosselImagem: {} },
    action
) => {
    switch (action.type) {
        case CARROSSEL_IMAGEM_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CARROSSEL_IMAGEM_DETAILS_SUCCESS:
            return { loading: false, carrosselImagem: action.payload };
        case CARROSSEL_IMAGEM_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const carrosselImagemCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CARROSSEL_IMAGEM_CREATE_REQUEST:
            return { loading: true };
        case CARROSSEL_IMAGEM_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                carrosselImagem: action.payload,
            };
        case CARROSSEL_IMAGEM_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CARROSSEL_IMAGEM_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const carrosselImagemUpdateReducer = (
    state = { carrosselImagem: {} },
    action
) => {
    switch (action.type) {
        case CARROSSEL_IMAGEM_UPDATE_REQUEST:
            return { loading: true };
        case CARROSSEL_IMAGEM_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                carrosselImagem: action.payload,
            };
        case CARROSSEL_IMAGEM_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CARROSSEL_IMAGEM_UPDATE_RESET:
            return { carrosselImagem: {} };
        default:
            return state;
    }
};

export const carrosselImagemDeleteReducer = (
    state = { carrosselImagem: {} },
    action
) => {
    switch (action.type) {
        case CARROSSEL_IMAGEM_DELETE_REQUEST:
            return { loading: true };
        case CARROSSEL_IMAGEM_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
                carrosselImagem: action.payload,
            };
        case CARROSSEL_IMAGEM_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
