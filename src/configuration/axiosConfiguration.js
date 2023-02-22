import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

console.log("API_URL", API_URL);

const connectionApi = axios.create({
    baseURL: API_URL
})

export default connectionApi
