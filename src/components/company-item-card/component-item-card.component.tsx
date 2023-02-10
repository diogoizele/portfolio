import React from "react";
import { useTheme } from "styled-components";

import { Text } from "components";

import {
  Container,
  CompanyLogo,
  LogoContainer,
  ShadowRightImage,
  HightlightsContainer,
  ContainerHighlightCard,
} from "./component-item-card.styles";
import type { CompanyProps, HighlightCompanyProps } from "types";

interface Props extends CompanyProps {
  onPause: () => void;
  onPlay: () => void;
}

export const HighlightCard = ({ icon: Icon, title }: HighlightCompanyProps) => {
  const { colors } = useTheme();
  const fontColor = colors.textSecondary;

  return (
    <ContainerHighlightCard>
      <Icon color={colors.primary} size={28} />
      <Text.Body key={title} color={fontColor} fontSize="0.9rem">
        {title}
      </Text.Body>
    </ContainerHighlightCard>
  );
};

export function ComponentItemCard({
  description,
  image,
  link,
  name,
  period,
  role,
  highlights,
  onPause,
  onPlay,
}: Props) {
  const { colors } = useTheme();

  return (
    <Container
      href={link}
      target="_blank"
      onMouseEnter={onPause}
      onMouseLeave={onPlay}
    >
      <Text.Title component="h3" fontSize={"2rem"}>
        {name}
      </Text.Title>
      <Text.Subtitle color={colors.textTertiary}>{role}</Text.Subtitle>
      <Text.Subtitle component="strong" color={colors.textTertiary}>
        {period}
      </Text.Subtitle>
      <HightlightsContainer>
        {highlights.map(({ title, icon }) => (
          <HighlightCard key={title} icon={icon} title={title} />
        ))}
      </HightlightsContainer>
      <Text.Body color={colors.textSecondary}>{description}</Text.Body>
      <ShadowRightImage />
      <LogoContainer>
        <CompanyLogo src={image} alt={name} width={320} height={320} />
      </LogoContainer>
    </Container>
  );
}
