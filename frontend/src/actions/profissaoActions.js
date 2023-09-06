import {
    PROFISSAO_LIST_REQUEST,
    PROFISSAO_LIST_SUCCESS,
    PROFISSAO_LIST_FAIL,
    PROFISSAO_DELETE_REQUEST,
    PROFISSAO_DELETE_SUCCESS,
    PROFISSAO_DELETE_FAIL,
    PROFISSAO_DETAILS_REQUEST,
    PROFISSAO_DETAILS_SUCCESS,
    PROFISSAO_DETAILS_FAIL,
    PROFISSAO_UPDATE_REQUEST,
    PROFISSAO_UPDATE_SUCCESS,
    PROFISSAO_UPDATE_FAIL,
    PROFISSAO_UPDATE_RESET,
    PROFISSAO_CREATE_REQUEST,
    PROFISSAO_CREATE_SUCCESS,
    PROFISSAO_CREATE_FAIL,
    PROFISSAO_CREATE_RESET,
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

export const listProfissaoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_DETAILS_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/profissoes/${id}`, config);
        dispatch({ type: PROFISSAO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PROFISSAO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};


export const updateProfissao = (profissao) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFISSAO_UPDATE_REQUEST,
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
        const {data} = await axios.put(`/api/profissoes/update/${profissao.id}/`, profissao, config);
        dispatch({
            type: PROFISSAO_UPDATE_SUCCESS,
            payload: data
        });
        dispatch({ type: PROFISSAO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PROFISSAO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}

export const createProfissao = (profissao) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFISSAO_CREATE_REQUEST,
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
        const {data} = await axios.post(`/api/profissoes/create/`, profissao, config);
        dispatch({
            type: PROFISSAO_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
}