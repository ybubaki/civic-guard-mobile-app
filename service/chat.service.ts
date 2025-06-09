import axios from "axios";
import { API_BASE_URL } from ".";

const BASE_URL = `${API_BASE_URL}/chat`;

export const chat = async (chatData: any) => {
  try {
    const response = await axios.post(BASE_URL, chatData.formData, {
      headers: {
        Authorization: `Bearer ${chatData.token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error creating issue:", error?.response?.data);
    throw error?.response?.data || "Internal Server Error";
  }
};
