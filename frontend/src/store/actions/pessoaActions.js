import {
    PESSOA_LIST_REQUEST,
    PESSOA_CREATE_FAIL,
    PESSOA_CREATE_REQUEST,
    PESSOA_CREATE_RESET,
    PESSOA_CREATE_SUCCESS,
    PESSOA_DELETE_FAIL,
    PESSOA_DELETE_REQUEST,
    PESSOA_DELETE_SUCCESS,
    PESSOA_DETAILS_FAIL,
    PESSOA_DETAILS_REQUEST,
    PESSOA_DETAILS_SUCCESS,
    PESSOA_LIST_FAIL,
    PESSOA_LIST_SUCCESS,
    PESSOA_UPDATE_FAIL,
    PESSOA_UPDATE_REQUEST,
    PESSOA_UPDATE_RESET,
    PESSOA_UPDATE_SUCCESS,
} from "../constants/pessoaConstants";
import pessoaService from "../../services/api/pessoaService";

export const listPessoas = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PESSOA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const pessoas = await pessoaService.listPessoas(userInfo.token);

        dispatch({
            type: PESSOA_LIST_SUCCESS,
            payload: pessoas,
        });
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

export const getPessoaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PESSOA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const pessoa = await pessoaService.getPessoaDetails(id, userInfo.token);

        dispatch({
            type: PESSOA_DETAILS_SUCCESS,
            payload: pessoa,
        });
    } catch (error) {
        dispatch({
            type: PESSOA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createPessoa = (pessoa) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PESSOA_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const createdPessoa = await pessoaService.createPessoa(
            pessoa,
            userInfo.token
        );

        dispatch({
            type: PESSOA_CREATE_SUCCESS,
            payload: createdPessoa,
        });
    } catch (error) {
        dispatch({
            type: PESSOA_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updatePessoa = (pessoa) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PESSOA_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedPessoa = await pessoaService.updatePessoa(
            pessoa,
            userInfo.token
        );

        dispatch({
            type: PESSOA_UPDATE_SUCCESS,
            payload: updatedPessoa,
        });
    } catch (error) {
        dispatch({
            type: PESSOA_UPDATE_FAIL,
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

        await pessoaService.deletePessoa(id, userInfo.token);

        dispatch({
            type: PESSOA_DELETE_SUCCESS,
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
};
