import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5555",
  // baseURL: "https://svovka-business-office-backend.onrender.com",
});

export default instance;
