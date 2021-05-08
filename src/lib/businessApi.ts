import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;

const businessApi = {
  getBusinessByCity: async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
};

export default businessApi;
