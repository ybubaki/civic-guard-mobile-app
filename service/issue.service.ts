import axios from "axios";
import { API_BASE_URL } from "./index";

const BASE_URL = `${API_BASE_URL}/issues`;

export const createIssue = async (issueData: any) => {
  try {
    const response = await axios.post(BASE_URL, issueData.formData, {
      headers: {
        Authorization: `Bearer ${issueData.token}`,
        "Content-Type": "multipart/form-data",
      },
      transformRequest: () => issueData.formData,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error creating issue:", error?.response?.data);
    throw error?.response?.data || "Internal Server Error";
  }
};

export const getIssues = async (token: string | null) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching issues:", error);
    throw error?.response?.data || "Internal Server Error";
  }
};

export const getIssuesByUser = async (token: string | null) => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching issues:", error);
    throw error?.response?.data || "Internal Server Error";
  }
};

export const getIssueById = async (id: string, token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching issue by ID:", error);
    throw error?.response?.data || "Internal Server Error";
  }
};

export const updateIssue = async (
  id: string,
  issueData: any,
  token: string
) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, issueData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error updating issue:", error);
    throw error?.response?.data || "Internal Server Error";
  }
};

export const deleteIssue = async (id: string, token: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error deleting issue:", error);
    throw error?.response?.data || "Internal Server Error";
  }
};
