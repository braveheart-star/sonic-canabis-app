import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface RequestInterface {
  url: string;
  body?: any;
  token?: string;
  actions?: any;
}

export async function get(args: RequestInterface): Promise<AxiosResponse> {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "GET",
    });
    return request;
  } catch (error) {
    return error.request;
  }
}

export async function post(args: RequestInterface): Promise<AxiosResponse> {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "POST",
      data: args.body,
    });
    return request;
  } catch (error) {
    return error.request;
  }
}

export async function put(args: RequestInterface): Promise<AxiosResponse> {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "PUT",
      data: args.body,
    });
    return request;
  } catch (error) {
    return error.request;
  }
}

export async function _delete(args: RequestInterface): Promise<AxiosResponse> {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "DELETE",
      data: args.body,
    });
    return request;
  } catch (error) {
    return error.request;
  }
}

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers.credentials = "include";
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    alert("interceptor request has error");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      debugger;

      // Hace la solicitud de refresco de tokens
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
