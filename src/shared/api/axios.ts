import axios from "axios";
import { API_KEY, APT_URL } from "../const/api";

export const axiosInstance = axios.create({
  baseURL: APT_URL,
  timeout: 2000,
  headers: {
    Authorization:
      `Bearer ${API_KEY}`,
  },
});
