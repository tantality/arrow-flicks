import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 4000,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
});
