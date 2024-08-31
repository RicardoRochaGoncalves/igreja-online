import {
    CARROSSEL_IMAGEM_LIST_REQUEST,
    CARROSSEL_IMAGEM_LIST_SUCCESS,
    CARROSSEL_IMAGEM_LIST_ERROR,
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
    CARROSSEL_IMAGEM_LIST_FAIL,
    CARROSSEL_IMAGEM_UPDATE_FAIL,
    CARROSSEL_IMAGEM_UPDATE_REQUEST,
    CARROSSEL_IMAGEM_UPDATE_RESET,
    CARROSSEL_IMAGEM_UPDATE_SUCCESS,
} from "../constants/carrosselImagemConstants";
import carrosselImagemService from "../../services/api/carrosselImagemService";

export const listCarrosselImagens = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CARROSSEL_IMAGEM_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const carrosselImagens =
            await carrosselImagemService.listCarrosselImagens(userInfo.token);

        dispatch({
            type: CARROSSEL_IMAGEM_LIST_SUCCESS,
            payload: carrosselImagens,
        });
    } catch (error) {
        dispatch({
            type: CARROSSEL_IMAGEM_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getCarrosselImagemDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CARROSSEL_IMAGEM_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const carrosselImagem =
            await carrosselImagemService.getCarrosselImagemDetails(
                id,
                userInfo.token
            );

        dispatch({
            type: CARROSSEL_IMAGEM_DETAILS_SUCCESS,
            payload: carrosselImagem,
        });
    } catch (error) {
        dispatch({
            type: CARROSSEL_IMAGEM_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createCarrosselImagem =
    (carrosselImagem) => async (dispatch, getState) => {
        try {
            dispatch({ type: CARROSSEL_IMAGEM_CREATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const createdCarrosselImagem =
                await carrosselImagemService.createCarrosselImagem(
                    carrosselImagem,
                    userInfo.token
                );

            dispatch({
                type: CARROSSEL_IMAGEM_CREATE_SUCCESS,
                payload: createdCarrosselImagem,
            });
        } catch (error) {
            dispatch({
                type: CARROSSEL_IMAGEM_CREATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const updateCarrosselImagem =
    (carrosselImagem) => async (dispatch, getState) => {
        try {
            dispatch({ type: CARROSSEL_IMAGEM_UPDATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const updatedCarrosselImagem =
                await carrosselImagemService.updateCarrosselImagem(
                    carrosselImagem,
                    userInfo.token
                );

            dispatch({
                type: CARROSSEL_IMAGEM_UPDATE_SUCCESS,
                payload: updatedCarrosselImagem,
            });
        } catch (error) {
            dispatch({
                type: CARROSSEL_IMAGEM_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const deleteCarrosselImagem = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CARROSSEL_IMAGEM_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await carrosselImagemService.deleteCarrosselImagem(id, userInfo.token);

        dispatch({ type: CARROSSEL_IMAGEM_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: CARROSSEL_IMAGEM_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
