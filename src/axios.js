import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5555",
  baseURL: "https://svovka-business-office-backend.onrender.com",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
