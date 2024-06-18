import axios from "axios";

export const serverURL = "http://localhost:5555";
// export const serverURL = "https://svovka-business-office-backend.onrender.com";

const instance = axios.create({
  baseURL: serverURL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
