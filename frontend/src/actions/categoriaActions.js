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
import axios from "axios";

export const listCategorias = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/categorias/", config);
        dispatch({ type: CATEGORIA_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORIA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteCategoria = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const {data} = await axios.delete(`/api/categorias/delete/${id}/`, config);
        dispatch({
            type: CATEGORIA_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const listCategoriaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const {data} = await axios.get(`/api/categorias/${id}/`, config);
        dispatch({
            type: CATEGORIA_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const updateCategoria = (categoria) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORIA_UPDATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const {data} = await axios.put(`/api/categorias/update/${categoria.id}/`, categoria, config);
        dispatch({
            type: CATEGORIA_UPDATE_SUCCESS,
            payload: data
        });
        dispatch({
            type: CATEGORIA_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}