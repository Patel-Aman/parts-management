import axios from "axios";

const apiConfig = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        auth: document.cookie,
    },
    withCredentials: true,
});

export default apiConfig;
