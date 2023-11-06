import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your API's URL

export const register = async (userData) => {
    try {

        let data = new FormData();
        data.append('email', userData.email);
        data.append('password', userData.password);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/api/signup`,
            data : data
        };

        axios.request(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
            });

    } catch (error) {
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login`, credentials);
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in local storage
        return token;
    } catch (error) {
        throw error;
    }
};


export const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
};

export const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/check-auth`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
