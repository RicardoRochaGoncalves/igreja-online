import axios from "axios";

const API_URL = "/api/area-restrita/categoria-pessoa/";

const listCategoriasPessoa = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getCategoriaPessoaDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createCategoriaPessoa = async (categoriaPessoa, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, categoriaPessoa, config);
    return response.data;
}

const updateCategoriaPessoa = async (categoriaPessoa, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${categoriaPessoa.id}/`, categoriaPessoa, config);
    return response.data;
}

const deleteCategoriaPessoa = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    await axios.delete(`${API_URL}delete/${id}/`, config);
}


export default {
    listCategoriasPessoa,
    getCategoriaPessoaDetails,
    createCategoriaPessoa,
    updateCategoriaPessoa,
    deleteCategoriaPessoa,
};