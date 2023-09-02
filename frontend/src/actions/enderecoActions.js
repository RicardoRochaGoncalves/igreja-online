import {
    ENDERECO_LIST_REQUEST,
    ENDERECO_LIST_SUCCESS,
    ENDERECO_LIST_FAIL,
    ENDERECO_DELETE_REQUEST,
    ENDERECO_DELETE_SUCCESS,
    ENDERECO_DELETE_FAIL,
} from "../constants/enderecoConstants";
import axios from "axios";

export const listEnderecos = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ENDERECO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/enderecos/", config);
        dispatch({ type: ENDERECO_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ENDERECO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const deleteEndereco = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ENDERECO_DELETE_REQUEST,
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
        const {data} = await axios.delete(`/api/enderecos/delete/${id}/`, config);
        dispatch({
            type: ENDERECO_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ENDERECO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}