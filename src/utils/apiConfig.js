import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1", // Change this to your API base URL
    timeout: 10000, // Adjust timeout as needed
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
