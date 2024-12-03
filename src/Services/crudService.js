import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, payload, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

export const updateData = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
