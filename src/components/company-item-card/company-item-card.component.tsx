import React from "react";
import { useTheme } from "styled-components";

import { Text } from "components";
import { FONT_SIZE } from "styles";

import {
  Container,
  CompanyLogo,
  LogoContainer,
  RoleContainer,
} from "./company-item-card.styles";
import type { CompanyProps } from "types";

interface Props {
  company: CompanyProps;
  currentJob: boolean;
  highlighted: boolean;
}

export function ComponentItemCard({
  company: { image, name, period, role },
  currentJob,
  highlighted,
}: Props) {
  const { colors } = useTheme();

  const getSimplePeriod = (period: string) => {
    const [timePeriod] = period.split("·");

    return timePeriod;
  };

  return (
    <Container>
      <LogoContainer isCurrentJob={currentJob} isHighlighted={highlighted}>
        <CompanyLogo src={image} alt={name} width={64} height={64} />
      </LogoContainer>
      <RoleContainer>
        <Text.Subtitle fontSize={FONT_SIZE.REGULAR} color={colors.textTertiary}>
          {role}
        </Text.Subtitle>
      </RoleContainer>
      <Text.Subtitle component="strong" color={colors.textTertiary}>
        {getSimplePeriod(period)}
      </Text.Subtitle>
    </Container>
  );
}
