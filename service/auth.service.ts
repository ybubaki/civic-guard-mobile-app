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

export const updateUser = async (data: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/update`, data.userData, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error updating user:", error?.response?.data);
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

export const changePassword = async (data: any) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/change-password`,
      data.passwordData,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error changing password:", error?.response?.data);
    throw error?.response?.data;
  }
};

export const verifyEmail = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-otp`, data);
    return response.data;
  } catch (error: any) {
    console.error("Error verifying email:", error?.response?.data);
    throw error?.response?.data;
  }
};

export const forgotPassword = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/forgot-password`, data);
    return response.data;
  } catch (error: any) {
    console.error("Error forgot password:", error?.response?.data);
    throw error?.response?.data;
  }
};

export const getMe = async (token?: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error getting user:", error?.response?.data);
    throw error?.response?.data;
  }
};
