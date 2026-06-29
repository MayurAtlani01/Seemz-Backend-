import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export const registerUser = (userData) => {
  return API.post("/register", userData);
};