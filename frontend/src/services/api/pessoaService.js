import axios from "axios";

const API_URL = "/api/area-restrita/pessoa/";

const listPessoas = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

const getPessoaDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
};

const createPessoa = async (pessoa, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, pessoa, config);
    return response.data;
};

const updatePessoa = async (pessoa, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(
        `${API_URL}update/${pessoa.id}/`,
        pessoa,
        config
    );
    return response.data;
};

const deletePessoa = async (id, token) => {
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
    listPessoas,
    getPessoaDetails,
    createPessoa,
    updatePessoa,
    deletePessoa,
};
