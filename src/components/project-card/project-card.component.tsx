import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FiGithub } from "react-icons/fi";
import LinesEllipsis from "react-lines-ellipsis";

import { Text } from "components";
import { RepositoryProps } from "types";
import { LanguagesColors } from "config/constants";

import {
  Container,
  FooterContainer,
  InfoContainer,
  LanguageBullet,
  LanguageItem,
  LanguagesList,
  LinkButton,
  SkeletonsClasses,
} from "./project-card.styles";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

interface Props {
  project: RepositoryProps;
}

export const ProjectCard = ({ project }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const { colors } = useTheme();

  useEffect(() => {
    project && setIsLoading(false);
  }, [project]);

  if (isLoading)
    return (
      <Container>
        <SkeletonTheme
          baseColor={colors.backgroundTertiary}
          highlightColor={colors.backgroundQuaternary}
        >
          <Skeleton style={SkeletonsClasses.title} duration={3000} />
          <Skeleton style={SkeletonsClasses.description} duration={3000} />
          <Skeleton style={SkeletonsClasses.footer} duration={3000} />
        </SkeletonTheme>
      </Container>
    );

  return (
    <Container>
      <InfoContainer>
        <Text.Subtitle
          mediaSize="2rem"
          fontSize="1.3rem"
          style={{ textTransform: "capitalize" }}
          fontStyle="bold"
          component="strong"
          color={({ colors }) => colors.secondary}
        >
          {project.name}
        </Text.Subtitle>

        <Text.Body>
          <LinesEllipsis
            text={project?.description || ""}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </Text.Body>
      </InfoContainer>

      <FooterContainer>
        <LinkButton
          title={`Go to ${project.name} repository`}
          href={project.html_url}
          target="_blank"
        >
          <FiGithub />
        </LinkButton>

        <LanguagesList>
          {project.languages?.map((language) => (
            <LanguageItem key={language}>
              <LanguageBullet
                color={LanguagesColors[language] ?? LanguagesColors.None}
              ></LanguageBullet>
              <Text.Subtitle
                component="strong"
                fontStyle="bold"
                fontSize="0.9rem"
              >
                {language}
              </Text.Subtitle>
            </LanguageItem>
          ))}
        </LanguagesList>
      </FooterContainer>
    </Container>
  );
};
