import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/issues";

export const createIssue = async (issueData: any) => {
    try {
        const response = await axios.post(BASE_URL, issueData);
        return response.data;
    } catch (error) {
        console.error("Error creating issue:", error);
        throw error;
    }
};


export const getIssues = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching issues:", error);
        throw error;
    }
};

export const getIssueById = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching issue by ID:", error);
        throw error;
    }
};

export const updateIssue = async (id: string, issueData: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, issueData);
        return response.data;
    } catch (error) {
        console.error("Error updating issue:", error);
        throw error;
    }
};

export const deleteIssue = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting issue:", error);
        throw error;
    }
};
