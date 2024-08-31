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
import noticiaService from "../../services/api/noticiaService";

export const listNoticias = () => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTICIA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const noticias = await noticiaService.listNoticias(userInfo.token);

        dispatch({
            type: NOTICIA_LIST_SUCCESS,
            payload: noticias,
        });
    } catch (error) {
        dispatch({
            type: NOTICIA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getNoticiaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTICIA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const noticia = await noticiaService.getNoticiaDetails(
            id,
            userInfo.token
        );

        dispatch({
            type: NOTICIA_DETAILS_SUCCESS,
            payload: noticia,
        });
    } catch (error) {
        dispatch({
            type: NOTICIA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createNoticia = (noticia) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTICIA_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdNoticia = await noticiaService.createNoticia(
            noticia,
            userInfo.token
        );

        dispatch({
            type: NOTICIA_CREATE_SUCCESS,
            payload: createdNoticia,
        });
    } catch (error) {
        dispatch({
            type: NOTICIA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateNoticia = (noticia) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTICIA_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedNoticia = await noticiaService.updateNoticia(
            noticia,
            userInfo.token
        );

        dispatch({
            type: NOTICIA_UPDATE_SUCCESS,
            payload: updatedNoticia,
        });
    } catch (error) {
        dispatch({
            type: NOTICIA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteNoticia = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTICIA_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await noticiaService.deleteNoticia(id, userInfo.token);

        dispatch({ type: NOTICIA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: NOTICIA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
