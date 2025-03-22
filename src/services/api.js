import axios from 'axios';

const API_URL = 'http://localhost:8080/api/inventory'; 

export const getObjectWeight = async () => {
    try {
        const response = await axios.get(`${API_URL}/weight`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el peso del objeto:', error);
        throw error;
    }
};

export const uploadImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        throw error;
    }
};