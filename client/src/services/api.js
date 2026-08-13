import axios from "axios";

const API = axios.create({
  baseURL: "https://med-diagnose-backend.onrender.com",
});

export default API;