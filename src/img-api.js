import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "j5bai0Y9_YKdbomWmcoepa0kkVl5Y8BVRmwVG5xoUh0";

const fetchImages = async (searchWord, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchWord,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${KEY}`,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchImages;
