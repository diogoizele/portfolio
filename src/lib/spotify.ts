import axios from "axios";

const API_SPOTIFY_URL = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  try {
    const response = await axios.post(
      API_SPOTIFY_URL,
      { grant_type: "refresh_token", refresh_token: refreshToken },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const currentPlayingTrack = async () => {
  const { access_token } = await getAccessToken();

  try {
    const response = await axios.get(
      "	https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
