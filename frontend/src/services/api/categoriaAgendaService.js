import axios from "axios";

const API_URL = "/api/public/categoria-agenda/";

const listCategoriasAgenda = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getCategoriaAgendaDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createCategoriaAgenda = async (categoriaAgenda, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, categoriaAgenda, config);
    return response.data;
}

const updateCategoriaAgenda = async (categoriaAgenda, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${categoriaAgenda.id}/`, categoriaAgenda, config);
    return response.data;
}

const deleteCategoriaAgenda = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${API_URL}delete/${id}/`, config);
    return response.data;
}

export default{
    listCategoriasAgenda,
    getCategoriaAgendaDetails,
    createCategoriaAgenda,
    updateCategoriaAgenda,
    deleteCategoriaAgenda,
};


