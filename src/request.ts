import type { AxiosInstance } from "axios";
import axios from "axios";

const myAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  withCredentials: true,
});

export default myAxios;
