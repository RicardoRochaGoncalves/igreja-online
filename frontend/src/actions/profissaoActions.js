import {
    PROFISSAO_LIST_REQUEST,
    PROFISSAO_LIST_SUCCESS,
    PROFISSAO_LIST_FAIL,
    PROFISSAO_DELETE_REQUEST,
    PROFISSAO_DELETE_SUCCESS,
    PROFISSAO_DELETE_FAIL,
} from "../constants/profissaoConstants";
import axios from "axios";

export const listProfissoes = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/profissoes/", config);
        dispatch({ type: PROFISSAO_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PROFISSAO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteProfissao = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFISSAO_DELETE_REQUEST,
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
        const {data} = await axios.delete(`/api/profissoes/delete/${id}/`, config);
        dispatch({
            type: PROFISSAO_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}
