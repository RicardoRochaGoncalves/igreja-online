import axios from 'axios';

const cleanCep = (cep) => cep.replace(/\D/g, '');

export const getCepData = async (cep) => {

    try {
        const cleanedCep = cleanCep(cep);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`);
        return data;
    } catch (error) {
        return error.response.data;
    }
};

