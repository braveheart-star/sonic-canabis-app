import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;

const productApi = {
  getProductByCategory: async (...args: any) => {
    const [url, token] = args;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default productApi;
