import axios, { AxiosInstance } from "axios";

interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  result: T;
}

type RequestData = Record<string, unknown>;
type HttpMethod = "get" | "post" | "put" | "delete";

// 토큰 관리
const token = {
  get: () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
  },

  set: (value: string, name: string = "accessToken") => {
    document.cookie = `${name}=${value}; path=/; max-age=86400`;
  },

  remove: () => {
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  },
};

// 토큰X 요청
const publicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// 토큰O 요청
const privateClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// 토큰O 요청 - interceptor에 토큰 넣기
privateClient.interceptors.request.use(
  (config) => {
    const accessToken = token.get();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 토큰O 요청 - 401 인증 에러나면 다시 로그인 시키기
privateClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      token.remove();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// 헬퍼 함수
const createApiRequest = (client: AxiosInstance) => {
  const request = <T>(method: HttpMethod, url: string, data?: RequestData) =>
    client
      .request<ApiResponse<T>>({ method, url, data })
      .then((response) => response.data);

  return {
    get: <T>(url: string) => request<T>("get", url),
    post: <T>(url: string, data?: RequestData) => request<T>("post", url, data),
    put: <T>(url: string, data?: RequestData) => request<T>("put", url, data),
    delete: <T>(url: string) => request<T>("delete", url),
  };
};

export const publicApi = createApiRequest(publicClient);
export const privateApi = createApiRequest(privateClient);
export { token };
