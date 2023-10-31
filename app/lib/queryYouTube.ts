import axios from "axios";

export async function getYouTubeUrl(song: string) {
  const options = {
    method: "GET",
    url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    params: { q: song },
    headers: {
      "X-RapidAPI-Key": "533bb382eamshcabd5eff42053ddp1c7668jsne954f62090d9",
      "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
