import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://pbody-fullstack-academy.onrender.com/api";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

API.interceptors.request.use(
  (config) => {
    console.log(
      "API REQUEST:",
      config.method?.toUpperCase(),
      `${config.baseURL}${config.url}`
    );

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    console.log(
      "API SUCCESS:",
      response.status,
      response.config?.url
    );

    return response;
  },
  (error) => {
    console.error("API ERROR:", error);

    if (error.response) {
      console.error(
        "STATUS:",
        error.response.status
      );

      console.error(
        "DATA:",
        error.response.data
      );
    }

    return Promise.reject(error);
  }
);

export const registerUser = async (data) => {
  const response = await API.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (data) => {
  const response = await API.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const getProfile = async (token) => {
  const response = await API.get(
    "/auth/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export default API;