import axios from "axios";

// import { SERVER_BASE_URL } from "../utils/constant";
// const SERVER_BASE_URL = "http://127.0.0.1:4000/api";
const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
console.log(
  "🚀 ~ file: userApi.ts ~ line 5 ~ SERVER_BASE_URL",
  SERVER_BASE_URL
);
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
        `${SERVER_BASE_URL}/user/register`,
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
      const response = await axios.get(`${SERVER_BASE_URL}/user/activate`, {
        params: { email, confirmCode },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },

  updateSelf: (token: string) => {
    console.log("🚀 ~ file: user.ts ~ line 67 ~ token", token);
    try {
      const response = axios.get(`${SERVER_BASE_URL}/user/self`, {
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
    console.log(
      "🚀 ~ file: userApi.ts ~ line 89 ~ socialAuth: ~ profile",
      profile
    );
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/user/social`,
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

  // from conduit
  save: async (user: any) => {
    try {
      const response = await axios.put(
        `${SERVER_BASE_URL}/user`,
        JSON.stringify({ user }),
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
  follow: async (username: string) => {
    const user: any = window.localStorage.getItem("user");
    const token = user?.token;
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/profiles/${username}/follow`,
        {},
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  unfollow: async (username: string) => {
    const user: any = window.localStorage.getItem("user");
    const token = user?.token;
    try {
      const response = await axios.delete(
        `${SERVER_BASE_URL}/profiles/${username}/follow`,
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  get: async (username: string) =>
    axios.get(`${SERVER_BASE_URL}/profiles/${username}`),
};

export default UserAPI;