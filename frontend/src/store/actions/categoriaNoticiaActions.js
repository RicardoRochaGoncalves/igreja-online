import {
    CATEGORIA_NOTICIA_LIST_FAIL,
    CATEGORIA_NOTICIA_LIST_REQUEST,
    CATEGORIA_NOTICIA_LIST_SUCCESS,
    CATEGORIA_NOTICIA_DETAILS_FAIL,
    CATEGORIA_NOTICIA_DETAILS_REQUEST,
    CATEGORIA_NOTICIA_DETAILS_SUCCESS,
    CATEGORIA_NOTICIA_CREATE_FAIL,
    CATEGORIA_NOTICIA_CREATE_REQUEST,
    CATEGORIA_NOTICIA_CREATE_SUCCESS,
    CATEGORIA_NOTICIA_UPDATE_REQUEST,
    CATEGORIA_NOTICIA_UPDATE_SUCCESS,
    CATEGORIA_NOTICIA_UPDATE_FAIL,
    CATEGORIA_NOTICIA_DELETE_REQUEST,
    CATEGORIA_NOTICIA_DELETE_SUCCESS,
    CATEGORIA_NOTICIA_DELETE_FAIL,
    CATEGORIA_NOTICIA_CREATE_RESET,
    CATEGORIA_NOTICIA_UPDATE_RESET,
} from "../constants/categoriaNoticiaConstants";
import categoriaNoticiaService from "../../services/api/categoriaNoticiaService";

export const listCategoriasNoticia = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_NOTICIA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriasNoticia =
            await categoriaNoticiaService.listCategoriasNoticia(userInfo.token);

        dispatch({
            type: CATEGORIA_NOTICIA_LIST_SUCCESS,
            payload: categoriasNoticia,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_NOTICIA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getCategoriaNoticiaDetails =
    (id) => async (dispatch, getState) => {
        try {
            dispatch({ type: CATEGORIA_NOTICIA_DETAILS_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const categoriaNoticia =
                await categoriaNoticiaService.getCategoriaNoticiaDetails(
                    id,
                    userInfo.token
                );

            dispatch({
                type: CATEGORIA_NOTICIA_DETAILS_SUCCESS,
                payload: categoriaNoticia,
            });
        } catch (error) {
            dispatch({
                type: CATEGORIA_NOTICIA_DETAILS_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const createCategoriaNoticia = (nome) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_NOTICIA_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriaNoticia =
            await categoriaNoticiaService.createCategoriaNoticia(
                nome,
                userInfo.token
            );

        dispatch({
            type: CATEGORIA_NOTICIA_CREATE_SUCCESS,
            payload: categoriaNoticia,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_NOTICIA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateCategoriaNoticia =
    (categoriaNoticia) => async (dispatch, getState) => {
        try {
            dispatch({
                type: CATEGORIA_NOTICIA_UPDATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const updatedCategoriaNoticia =
                await categoriaNoticiaService.updateCategoriaNoticia(
                    categoriaNoticia,
                    userInfo.token
                );

            dispatch({
                type: CATEGORIA_NOTICIA_UPDATE_SUCCESS,
                payload: updatedCategoriaNoticia,
            });
        } catch (error) {
            dispatch({
                type: CATEGORIA_NOTICIA_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const deleteCategoriaNoticia = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_NOTICIA_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        await categoriaNoticiaService.deleteCategoriaNoticia(
            id,
            userInfo.token
        );

        dispatch({ type: CATEGORIA_NOTICIA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: CATEGORIA_NOTICIA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
