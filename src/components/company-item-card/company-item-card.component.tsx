import React from "react";
import { useTheme } from "styled-components";
import Link from "next/link";

import { Text } from "components";

import {
  Container,
  CompanyLogo,
  LogoContainer,
  ShadowRightImage,
  HightlightsContainer,
  ContainerHighlightCard,
  Company,
} from "./company-item-card.styles";
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
    <Container onMouseEnter={onPause} onMouseLeave={onPlay}>
      <Company component="h3" fontSize="2rem">
        <Link href={link} target="_blank">
          {name}
        </Link>
      </Company>
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
