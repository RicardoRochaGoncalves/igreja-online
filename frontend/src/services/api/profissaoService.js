import axios from "axios";

const API_URL = "/api/area-restrita/profissao/";

const listProfissoes = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

const getProfissaoDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
};

const createProfissao = async (profissao, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, profissao, config);
    return response.data;
};

const updateProfissao = async (profissao, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(
        `${API_URL}update/${profissao.id}/`,
        profissao,
        config
    );
    return response.data;
};

const deleteProfissao = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${API_URL}delete/${id}/`, config);
    return response.data;
};

export default {
    listProfissoes,
    getProfissaoDetails,
    createProfissao,
    updateProfissao,
    deleteProfissao,
};
