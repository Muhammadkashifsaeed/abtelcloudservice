import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { publicEnv } from "@/lib/env";
import type { ApiError } from "@/types";

export const apiClient = axios.create({
  baseURL: publicEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Attach auth tokens or custom headers here when authentication is added.
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; errors?: Record<string, string[]> }>) => {
    const normalizedError: ApiError = {
      status: error.response?.status ?? 500,
      message:
        error.response?.data?.message ??
        error.message ??
        "An unexpected network error occurred.",
      code: error.response?.data?.code ?? error.code,
      errors: error.response?.data?.errors,
    };

    return Promise.reject(normalizedError);
  }
);
