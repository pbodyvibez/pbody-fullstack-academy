import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://pbody-fullstack-academy.onrender.com/api",
});

// ======================================
// REGISTER
// ======================================

export const registerUser = async (data) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

// ======================================
// LOGIN
// ======================================

export const loginUser = async (data) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

// ======================================
// PROFILE
// ======================================

export const getProfile = async (token) => {
  const response = await API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};