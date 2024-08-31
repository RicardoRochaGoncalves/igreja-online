import axios from "axios";

// Serviço responsável por fazer o upload de uma imagem
export const uploadImage = async (file, category = "general") => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('category', category);

    try {
        const response = await axios.post('/api/utils/upload-image/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.image_url; // Retorna a URL da imagem salva
    } catch (error) {
        console.error("Erro ao fazer upload de imagem:", error);
        throw error; // Lança o erro para ser tratado no componente, se necessário
    }
};
