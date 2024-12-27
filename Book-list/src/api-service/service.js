import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const addBook = async (book) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/api/v1/book/`, book);
    return response;
  } catch (err) {
    return err;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${VITE_API_URL}/api/v1/book/`);
    return response;
  } catch (err) {
    return err;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/api/v1/book/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${VITE_API_URL}/api/v1/book/${id}`, book);
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${VITE_API_URL}/api/v1/book/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};
