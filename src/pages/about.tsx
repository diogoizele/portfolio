import { useEffect } from "react";
import { useTheme } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { EntryCollection } from "contentful";
import Link from "next/link";

import { Text, ResumeButton, SpotifyCard, ProjectHeader } from "components";
import { FONT_STYLES } from "styles";
import { BEHAVIORAL, CONTACT, PRESENTATION, ROLES } from "utils/static";
import { currentPlayingTrack } from "lib/spotify";
import { Companies, Education } from "containers";
import { ContentfulService } from "api";
import { companyModel, educationModel } from "models";

import avatarImg from "assets/images/memoji-diogo-izele.png";
import myPictureImg from "assets/images/i-reading-pic.jpeg";

import {
  Container,
  Content,
  ImageContainer,
  Memoji,
  MyPicture,
  ParagraphiesContainer,
  PersonalContainer,
  Title,
} from "styles/pages/about.styles";

import type {
  CompanyProps,
  EducationProps,
  SpotifyCurrentTrackResponse,
} from "types";

interface Props {
  spotify?: SpotifyCurrentTrackResponse;
  experiences: EntryCollection<CompanyProps>;
  education: EntryCollection<EducationProps>;
}

export default function About({ spotify, experiences, education }: Props) {
  const { colors } = useTheme();

  const [roles] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: ROLES,
  });

  useEffect(() => {}, []);

  return (
    <>
      <ProjectHeader
        title="Diogo Izele - About"
        description="A little about who Diogo Izele is"
        keywords="About Diogo Izele"
        url="https://diogoizele.com/about"
      />
      <Container>
        <Title id="about-me">
          <Link href="#about-me">About Me.</Link>
        </Title>
        <Content>
          <ImageContainer>
            <Memoji
              src={avatarImg}
              quality={100}
              alt="Diogo Izele's apple memoji"
              width={256}
              height={256}
            />
          </ImageContainer>
          <PersonalContainer>
            <Text.Body
              component="p"
              fontSize="1.6rem"
              fontStyle={FONT_STYLES.BOLD}
              color={colors.textTertiary}
            >
              Hi there! 👋
            </Text.Body>
            <Text.Subtitle color={colors.textSecondary} fontSize="3rem">
              My name is
            </Text.Subtitle>
            <Text.Title
              component="h2"
              fontSize="4.5rem"
              fontStyle={FONT_STYLES.BLACK}
            >
              Diogo Izele
            </Text.Title>
            <Text.Body
              component="p"
              fontSize="1.6rem"
              fontStyle={FONT_STYLES.BOLD}
              color={colors.textTertiary}
            >
              And I&apos;m a {/* &apos; = '  */}
            </Text.Body>
            <Text.Title fontSize="3.5rem">
              <span>{roles}</span>
              <Cursor cursorColor={colors.primary} />
            </Text.Title>
            <Text.Title fontSize="2.5rem" color={colors.quaternary}>
              Developer
            </Text.Title>
          </PersonalContainer>
        </Content>
        <Content>
          <ParagraphiesContainer>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {PRESENTATION}
            </Text.Body>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {BEHAVIORAL}
            </Text.Body>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {CONTACT}
            </Text.Body>
            <ResumeButton />
          </ParagraphiesContainer>

          <ImageContainer>
            <MyPicture
              alt="Diogo Izele face's picture"
              src={myPictureImg}
              quality={100}
              width={304}
              height={304}
            />
          </ImageContainer>
        </Content>
        <Title id="experiences">
          <Link href="#experiences">Experiences.</Link>
        </Title>
        <Companies companies={companyModel(experiences)} />
        <Title id="education">
          <Link href="#education">Education.</Link>
        </Title>
        <Education education={educationModel(education)} />
        <SpotifyCard {...spotify} />
      </Container>
    </>
  );
}

// https://nextjs.org/learn/basics/api-routes/api-routes-details
export async function getStaticProps() {
  const spotify: SpotifyCurrentTrackResponse = await currentPlayingTrack();

  const experiences = await ContentfulService.getExperienceContent();
  const education = await ContentfulService.getEducationContent();

  return {
    props: {
      spotify,
      experiences,
      education,
    },
    revalidate: 60 * 2 + 30, // 2 minutes and 30 seconds
  };
}
