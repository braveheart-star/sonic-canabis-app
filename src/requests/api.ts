import axios, { AxiosResponse } from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const apiUrl = SERVER_BASE_URL;

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
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
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
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
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
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
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
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
      data: args.body,
    });
    return request;
  } catch (error) {
    return error.request;
  }
}
