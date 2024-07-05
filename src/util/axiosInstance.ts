import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const setApiAuthHeader = (token?: string) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
