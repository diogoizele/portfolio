import { apiInstance } from "api";
import { URIS } from "config/constants";

import type { SpotifyCurrentTrackResponse, TokenResponse } from "types";

const getAccessToken = async () => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  try {
    const response = await apiInstance.post<TokenResponse>(
      URIS.SPOTIFY.AUTH,
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
  try {
    const { access_token } = await getAccessToken();

    const response = await apiInstance.get<SpotifyCurrentTrackResponse>(
      URIS.SPOTIFY.V1,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 204) {
      return null;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
