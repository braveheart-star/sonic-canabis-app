import axios from "axios";
import { SERVER_BASE_URL } from "../../src/utils/constant";

export const UseAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/login`,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },

  register: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user`,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response;
    }
  },
};
