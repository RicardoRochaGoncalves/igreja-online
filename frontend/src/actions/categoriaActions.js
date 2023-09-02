import {
    CATEGORIA_LIST_REQUEST,
    CATEGORIA_LIST_SUCCESS,
    CATEGORIA_LIST_FAIL,
    CATEGORIA_DELETE_REQUEST,
    CATEGORIA_DELETE_SUCCESS,
    CATEGORIA_DELETE_FAIL,
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