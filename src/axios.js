import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5555",
  // baseURL: "https://tasks-for-children-backend.onrender.com",
});

export default instance;
