import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

if (!RAPID_API_KEY) {
  console.error("Missing VITE_RAPID_API_KEY in .env file");
}

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
