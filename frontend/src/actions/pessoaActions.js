import {
    PESSOA_LIST_REQUEST,
    PESSOA_LIST_SUCCESS,
    PESSOA_LIST_FAIL,
    PESSOA_DELETE_REQUEST,
    PESSOA_DELETE_SUCCESS,
    PESSOA_DELETE_FAIL,
} from "../constants/pessoaConstants";
import axios from "axios";

export const listPessoas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PESSOA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/pessoas/", config);
        dispatch({ type: PESSOA_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PESSOA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deletePessoa = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PESSOA_DELETE_REQUEST,
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
        const {data} = await axios.delete(`/api/pessoas/delete/${id}/`, config);
        dispatch({
            type: PESSOA_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PESSOA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}