import axios from "axios";
import { API_BASE_URL } from "./index";

const BASE_URL = `${API_BASE_URL}/auth`;

export const register = async (userData: RegisterData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    console.error("Error registering user:", error?.response?.data);
    throw error?.response?.data;
  }
};

export const login = async (userData: LoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error: any) {
    console.error("Error logging in user:", error?.response?.data);
    throw error?.response?.data;
  }
};
