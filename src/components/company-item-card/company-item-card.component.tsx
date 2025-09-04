import React from "react";
import { useTheme } from "styled-components";
import dayjs from "dayjs";

import { Text } from "components";
import { FONT_SIZE, FONT_STYLES } from "styles";

import {
  Bullet,
  Container,
  Header,
  LeftSide,
  Line,
  MainTask,
  MainTasksContainer,
  RightSide,
  Skill,
  SkillsContainer,
} from "./company-item-card.styles";

interface Props {
  position: string;
  period: string;
  location: string;
  skills: string[];
  mainTasks: string[];
  startDate: string;
  endDate: string;
}

const formatDate = (date: string) => dayjs(date).format("MMMM YYYY");

const getFormattedDateRange = (start: string, end?: string) => {
  const startDate = formatDate(start);
  const endDate = end ? formatDate(end) : "Present";
  return `${startDate} - ${endDate}`;
};

export function ComponentItemCard({
  endDate,
  location,
  mainTasks,
  period,
  position,
  skills,
  startDate,
}: Props) {
  const isCurrent = !!endDate;

  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <LeftSide>
          <Text.Title
            color={colors.textPrimary}
            fontSize={FONT_SIZE.LARGE}
            fontStyle={FONT_STYLES.MEDIUM}
          >
            {position}
          </Text.Title>
          <Text.Subtitle
            color={colors.textTertiary}
            fontSize={FONT_SIZE.REGULAR}
            fontStyle={FONT_STYLES.REGULAR}
          >
            {period} • {location}
          </Text.Subtitle>
        </LeftSide>
        <RightSide>
          <Text.Body color={colors.textQuaternary}>
            {getFormattedDateRange(startDate, endDate)}
          </Text.Body>
        </RightSide>
      </Header>
      <SkillsContainer>
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsContainer>
      <MainTasksContainer>
        {mainTasks.map((task) => (
          <MainTask key={task}>
            <Text.Body
              fontSize={FONT_SIZE.REGULAR}
              fontStyle={FONT_STYLES.REGULAR}
              color={colors.textTertiary}
            >
              {task}
            </Text.Body>
          </MainTask>
        ))}
      </MainTasksContainer>
      <Bullet isCurrent={isCurrent} />
      <Line />
    </Container>
  );
}
