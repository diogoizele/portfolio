import { Text } from "components";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { FONT_STYLES } from "styles/font-styles";

import {
  Container,
  Icon,
  IconContainer,
  TrackInfo,
} from "./spotify-card.styles";

interface Props {
  item: {
    name: string;
    external_urls: {
      spotify: string;
    };
    explicit: boolean;
    duration_ms: number;
    disc_number: number;
    artists: {
      name: string;
    }[];
    album: {
      name: string;
    };
  };
}

export function SpotifyCard({ item }: Props) {
  const { colors } = useTheme();

  if (!item?.name) {
    return null;
  }

  return (
    <Container href={item.external_urls.spotify} target="_blank">
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
