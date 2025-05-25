import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/auth";

export const register = async (userData: RegisterData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const login = async (userData: LoginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};