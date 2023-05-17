import { Text } from "components";
import { memo, useMemo } from "react";
import { useTheme } from "styled-components";
import { FONT_STYLES } from "styles/font-styles";
import { SpotifyCurrentTrackResponse } from "types";

import {
  Container,
  Icon,
  IconContainer,
  ImageContainer,
  SongImage,
  SpotifyContainer,
  TrackInfo,
  subtitleH4Style,
} from "./spotify-card.styles";

export function SpotifyCardWithoutMemo({
  item,
  is_playing,
}: SpotifyCurrentTrackResponse) {
  const { colors } = useTheme();

  const spotifyValidResponse = !!item;

  const songImage = useMemo(() => {
    if (!spotifyValidResponse) {
      return null;
    }

    const secondImage = item.album.images[1];

    if (secondImage) {
      return secondImage;
    }

    return item.album.images[0];
  }, [item?.album?.images, spotifyValidResponse]);

  if (!spotifyValidResponse || item.explicit) {
    return null;
  }

  return (
    <SpotifyContainer>
      <Text.Subtitle
        component="strong"
        style={subtitleH4Style({ color: colors.textTertiary })}
      >
        {is_playing ? "Listening Now" : "Last Song I've Listened"}
      </Text.Subtitle>
      <Container href={item?.external_urls?.spotify} target="_blank">
        <ImageContainer>
          <SongImage
            quality={100}
            alt={item?.name}
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
    </SpotifyContainer>
  );
}

export const SpotifyCard = memo(SpotifyCardWithoutMemo);
