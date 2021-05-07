import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;

const UserAPI = {
  current: async () => {
    const user: any = window.localStorage.getItem("user");
    const token = user?.token;
    try {
      const response = await axios.get(`/user`, {
        headers: {
          Authorization: `Token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "/user/login",
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
        "/user/register",
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

  activate: async (email: string, confirmCode: string) => {
    try {
      const response = await axios.get("/user/activate", {
        params: { email, confirmCode },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  updateSelf: (token: string) => {
    try {
      const response = axios.get("/user/self", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  socialAuth: async (profile: any) => {
    try {
      const response = await axios.post(
        "/user/social",
        JSON.stringify(profile),
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

export default UserAPI;
