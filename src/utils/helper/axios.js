import axios from "axios";
import env from "./env";

const axiosInstance = axios.create({
  baseURL: env.apiURL,
});

export const postAPI = (url, data, config) => {
  return axiosInstance.post(url, data, config);
};
