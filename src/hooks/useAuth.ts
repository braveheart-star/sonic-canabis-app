import { post as postRequest } from "../requests/api";

export const UseAPI = {
  login: async (payload: any) => {
    try {
      const response = await postRequest({
        url: "/user/login",
        body: payload,
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  register: async (payload: any) => {
    try {
      const response = await postRequest({
        url: "/user/register",
        body: payload,
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },
};
