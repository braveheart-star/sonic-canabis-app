import { post as postRequest } from "./api";

export const AuthAPI = {
  login: async (payload: { email: any; password: any }) => {
    try {
      const response = await postRequest({
        url: "/user/login",
        body: {
          email: payload.email,
          password: payload.password,
        },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  register: async (payload: { email: any; password: any }) => {
    try {
      const response = await postRequest({
        url: "/user/register",
        body: {
          email: payload.email,
          password: payload.password,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
