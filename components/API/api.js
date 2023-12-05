import axios from 'axios';

//const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your API's URL
// const API_BASE_URL = 'https://cars.xnaj.com/backend.cars.xnaj.com/public/api'; // Replace with your API's URL
  const API_BASE_URL = 'https://carproject.digitalotters.com/autoparts-backend/public/api'; // Replace with your API's URL

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
        return await axios.request(config);
    } catch (error) {
        throw error;
    }
};

export const updatePassword = async (userData,id) => {
    try {
        let data = new FormData();

        data.append('new_password', userData.new_password);
        data.append('current_password', userData.current_password);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/updatePassword/`+id,
            data : data
        };
        return await axios.request(config);
    } catch (error) {
        throw error;
    }
};




export const updateShipping = async (userData) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    try {

        let data = new FormData();
        data.append('first_name', userData.firstName);
        data.append('last_name', userData.lastName);
        data.append('company', userData.company);
        data.append('country', userData.country);
        data.append('address', userData.streetAddress);
        data.append('appartment', userData.appartment);
        data.append('zip_code', userData.zipCode);
        data.append('business_phone_number', userData.phone);
        data.append('save_as', userData.addressAs);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/updateShipping`,
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

export const orderPlace = async (userData) => {
    try {

        let data = new FormData();
        data.append('first_name', userData.firstName);
        data.append('last_name', userData.lastName);
        data.append('company', userData.company);
        data.append('street', userData.streetAddress);
        data.append('appartment', userData.appartment);
        data.append('zip_code', userData.zipCode);
        data.append('phone', userData.phone);
        data.append('sub_total', userData.subTotal);
        data.append('user', JSON.stringify(userData.user));
        data.append('cart', JSON.stringify(userData.cart));
        data.append('token', JSON.stringify(userData.cardToken.id));

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/order/create`,
            data : data
        };

        return await axios.request(config)
          /*  .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error );
            });*/

    } catch (error) {
        throw error;
    }
};

export const bussinesAcct = async (userData) => {
    try {

        let data = new FormData();
        data.append('first_name', userData.firstName);
        data.append('last_name', userData.lastName);
        data.append('job_title', userData.jobTitle);
        data.append('email', userData.email);
        data.append('password', userData.password);
        data.append('business_type', userData.bussinessType);
        data.append('business_name', userData.bussinessName);
        data.append('business_phone_number', userData.phoneNumber);
        data.append('business_address1', userData.bussinessAddress1);
        data.append('business_address2', userData.bussinessAddress2);
        data.append('zip_code', userData.zipCode);
        data.append('city', userData.cityState);
        data.append('type', 3);

        // data.append('user', JSON.stringify(userData.user));
        // data.append('cart', JSON.stringify(userData.cart));

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/bussinessAcct`,
            data : data
        };

        return await axios.request(config);

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
    localStorage.removeItem('user'); // Remove the user from local storage
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
export const vehicleYears = async (model) => {

    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allYears/`+model, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getVehicles = async () => {

    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/getVehicles`, {
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const vehicleModels = async (company) => {

    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/allModels/`+company, {
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

export const getVehicleId = async (data) => {
``
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicle/searchVehicle/`+data.year+`/`+data.model+`/`+data.company);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductbyId = async (id) => {

    try {
        const response = await axios.get(`${API_BASE_URL}/product/find/`+id);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getProductByCategoryId = async (categoryId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/getProductsByCategoryId/`+categoryId, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getProductsBySubCategoryId = async (subCategoryId,vehicleId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/getProductsBySubCategoryId/`+subCategoryId+ `/`+vehicleId, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getAddressesByUserId = async (userId) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/address/getByUserId/`+userId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getOrdersByUserId = async (userId) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/order/getByUserId/`+userId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const storeAddressBook = async (addressData) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    try {


        let config = {
            headers: { Authorization: `Bearer ${token}` },
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/address/create`,
            data : addressData
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
export const deleteAddressBook = async (addressId) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    try {


        let config = {
            headers: { Authorization: `Bearer ${token}` },
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/address/delete/`+addressId,
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
export const updateAddressBook = async (addressId, addressData) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    try {


        let config = {
            headers: { Authorization: `Bearer ${token}` },
            method: 'put',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL}/address/update/`+addressId,
            data: addressData
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
export const getProductBySearchString = async (searchString) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product/search/`+searchString, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
