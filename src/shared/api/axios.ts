import axios from "axios";
import { API_KEY } from "../const/api";

export const axiosInstance = axios.create({
  timeout: 4000,
  headers: {
    Authorization : 'Bearer ' + API_KEY
  }
});
