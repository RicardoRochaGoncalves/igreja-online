import axios from "axios";

const API_URL = "/api/public/categoria-noticia/";

const listCategoriasNoticia = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getCategoriaNoticiaDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createCategoriaNoticia = async (categoriaNoticia, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, categoriaNoticia, config);
    return response.data;
}

const updateCategoriaNoticia = async (categoriaNoticia, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${categoriaNoticia.id}/`, categoriaNoticia, config);
    return response.data;
}

const deleteCategoriaNoticia = async (id, token) => {
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
    listCategoriasNoticia,
    getCategoriaNoticiaDetails,
    createCategoriaNoticia,
    updateCategoriaNoticia,
    deleteCategoriaNoticia,
};

    