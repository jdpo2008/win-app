import axios from "axios";
import Router from "next/router";

const AxiosApi = axios.create({
  baseURL: "http://167.71.80.16:9001/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const AxiosUser = axios.create({
  baseURL: "http://167.71.80.16:9000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Change request data/error here
AxiosApi.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403) ||
      (error.response && error.response.data.message === "NOT_AUTHORIZED")
    ) {
      Router.reload();
    }
    return Promise.reject(error);
  }
);

AxiosUser.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosUser.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403) ||
      (error.response && error.response.data.message === "NOT_AUTHORIZED")
    ) {
      Router.reload();
    }
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await AxiosApi.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await AxiosApi.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await AxiosApi.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await AxiosApi.delete<T>(url);
    return response.data;
  }
}

export class Http {
  static async get<T>(url: string, params?: unknown) {
    const response = await AxiosUser.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await AxiosUser.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await AxiosUser.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await AxiosUser.delete<T>(url);
    return response.data;
  }
}
