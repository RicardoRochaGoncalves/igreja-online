import {
    GENERO_LIST_REQUEST,
    GENERO_LIST_SUCCESS,
    GENERO_LIST_FAIL,
    GENERO_DELETE_REQUEST,
    GENERO_DELETE_SUCCESS,
    GENERO_DELETE_FAIL,
} from "../constants/generoConstants";

import axios from "axios";

export const listGeneros = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GENERO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/generos/", config);
        dispatch({ type: GENERO_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GENERO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteGenero = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GENERO_DELETE_REQUEST,
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
        const {data} = await axios.delete(`/api/generos/delete/${id}/`, config);
        dispatch({
            type: GENERO_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GENERO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}