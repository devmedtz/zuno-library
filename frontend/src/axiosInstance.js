import axios from 'axios'

// Axious API instance for all request
export const API = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT_URL,
})