import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthData } from "../common/types/authTypes";

const onRequest = (config: AxiosRequestConfig) => {
  const session: AuthData = JSON.parse(
    localStorage.getItem("session") || '{"accessToken": ""}'
  );

  return axios
    .post(process.env.REACT_APP_BASE_URL + "users/token/verify/", {
      token: session.accessToken,
    })
    .then((response) => {
      // Access token is still valid
      config.headers!["Authorization"] = `Bearer ${session.accessToken}`;

      return config;
    })
    .catch((error) => {
      // Access token expired
      if (error.response.status === 401) {
        return axios
          .post(process.env.REACT_APP_BASE_URL + "users/token/refresh/", {
            refresh: session.refreshToken,
          })
          .then((refreshResponse) => {
            // Refreshed token
            session.accessToken = refreshResponse.data.access;
            config.headers!["Authorization"] = `Bearer ${session.accessToken}`;
            localStorage.setItem("session", JSON.stringify(session));

            return config;
          })
          .catch((refreshError) => {
            // Refresh token expired
            if (refreshError.response.status === 401) {
              localStorage.setItem("session", "{}");
              window.location.href = "/login";
            }
          });
      }

      return config;
    });
};

const onRequestError = (error: any) => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = async (error: any) => {
  return Promise.reject(error);
};

const setUpInterceptorsTo = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setUpInterceptorsTo;
