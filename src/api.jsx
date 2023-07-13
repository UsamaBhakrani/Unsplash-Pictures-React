import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JJOWuubhKu02OnCJ0_8QFL5AHxp2FJ5Fvj7xqWYOfeg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
