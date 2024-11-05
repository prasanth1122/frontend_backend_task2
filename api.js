// src/api/api.js

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch all articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
export const fetchCoupons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coupons`);
    console.log("TESTED");
    return response.data;
  } catch (error) {
    console.error("Error fetching coupons:", error);
    throw error;
  }
};

// Fetch an article by ID
export const fetchArticleById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
