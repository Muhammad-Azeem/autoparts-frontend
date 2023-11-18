import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your API's URL

export const register = async (userData) => {
    try {

        let data = new FormData();
        data.append('email', userData.email);
        data.append('password', userData.password);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/signup`,
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

export const changeEmail = async (userData) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    try {

        let data = new FormData();
        data.append('currentEmail', userData.currentEmail);
        data.append('newEmail', userData.newEmail);
        data.append('password', userData.password);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/changeEmail`,
            data : data,
            headers: {
                'Authorization': `Bearer ${token}`,
              }
        };

        axios.request(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error );
            });

    } catch (error) {
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        const token  = response.data.token;
        const user = JSON.stringify(response.data.user);
        console.log(user);
        localStorage.setItem('token', token); // Store the token in local storage
        localStorage.setItem('user', user); // Store the token in local storage
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
export const vehicleYears = async () => {

    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allYears`, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const vehicleModels = async () => {

    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allModels`, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const vehicleCompany = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allCompanies`, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllProductsByCategory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/getAllProductsByCategory`, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getMyGarage = async () => {
    const token = localStorage.getItem('token');
    let temp= localStorage.getItem('user');
    temp = JSON.parse(temp);

    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/getMyGarage/`+temp.id, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allCategories`, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductbyId = async ($id) => {
    const token = localStorage.getItem('token');
    let temp= localStorage.getItem('cart-product');
    temp = JSON.parse(temp);

    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/product/find/`+temp.id);
        return response.data;
    } catch (error) {
        throw error;
    }
};