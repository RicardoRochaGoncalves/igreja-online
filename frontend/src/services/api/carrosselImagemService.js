import axios from "axios";

const API_URL = "/api/public/carrossel-imagem/";

const listCarrosselImagens = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getCarrosselImagemDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createCarrosselImagem = async (carrosselImagem, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, carrosselImagem, config);
    return response.data;
}

const updateCarrosselImagem = async (carrosselImagem, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${carrosselImagem.id}/`, carrosselImagem, config);
    return response.data;
}

const deleteCarrosselImagem = async (id, token) => {
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
    listCarrosselImagens,
    getCarrosselImagemDetails,
    createCarrosselImagem,
    updateCarrosselImagem,
    deleteCarrosselImagem,
};