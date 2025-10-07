import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL || "/api/v1/noteapp/"
});

export default BACKEND_URL;