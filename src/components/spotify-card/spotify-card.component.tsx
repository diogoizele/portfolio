import { Text } from "components";
import { useEffect, useMemo } from "react";
import { useTheme } from "styled-components";
import { FONT_STYLES } from "styles/font-styles";
import { SpotifyCurrentTrackResponse } from "types";

import {
  Container,
  Icon,
  IconContainer,
  ImageContainer,
  SongImage,
  TrackInfo,
} from "./spotify-card.styles";

export function SpotifyCard({ item }: SpotifyCurrentTrackResponse) {
  const { colors } = useTheme();

  const songImage = useMemo(() => {
    const secondImage = item.album.images[1];

    if (secondImage) {
      return secondImage;
    }

    return item.album.images[0];
  }, [item.album.images]);

  return (
    <Container href={item.external_urls.spotify} target="_blank">
      <ImageContainer>
        <SongImage
          quality={100}
          alt={item.name}
          src={{
            src: songImage.url,
            height: songImage.height,
            width: songImage.width,
          }}
          width={songImage.width}
          height={songImage.height}
        />
      </ImageContainer>
      <TrackInfo>
        <Text.Subtitle component="strong" fontStyle={FONT_STYLES.BOLD}>
          {item.name}
        </Text.Subtitle>
        <Text.Body color={colors.textTertiary}>
          {item.artists.map((artist) => artist.name).join(", ")}
        </Text.Body>
      </TrackInfo>
      <IconContainer>
        <Icon />
        <Text.Body
          fontSize="0.9rem"
          fontStyle={FONT_STYLES.BOLD}
          color={colors.textQuaternary}
        >
          On Spotify
        </Text.Body>
      </IconContainer>
    </Container>
  );
}
