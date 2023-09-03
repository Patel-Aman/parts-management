import axios from "axios";

const apiConfig = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Add an interceptor to include the token in the headers for each request
apiConfig.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        document.cookie = token;
        // console.log(token);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiConfig;

// Function to get the token from local storage
export function getToken() {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
}
