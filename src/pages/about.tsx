import { useTheme } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

import { injectAppIconsAtContentful, logs } from "utils";
import { Text, ResumeButton, SpotifyCard, ProjectHeader } from "components";
import { FONT_STYLES } from "styles";
import { Companies, Education } from "containers";
import { getEducationContent, getExperienceContent } from "api";
import { useApp } from "hooks";

import avatarImg from "assets/images/memoji-diogo-izele.png";
import myPictureImg from "assets/images/i-reading-pic.jpeg";

import {
  Container,
  Content,
  Footer,
  ImageContainer,
  Memoji,
  MyPicture,
  ParagraphiesContainer,
  PersonalContainer,
} from "styles/pages/about.styles";

import type {
  CompanyProps,
  EducationProps,
  SpotifyCurrentTrackResponse,
} from "types";
import { AnimatedTitle } from "../components/animated-title/animated-title";

interface Props {
  spotify?: SpotifyCurrentTrackResponse;
  experiences?: CompanyProps[];
  education?: EducationProps[];
}

export default function About({ spotify, experiences, education }: Props) {
  const { colors } = useTheme();
  const { strings } = useApp();

  const [roles] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: strings.about.greetings.fifth.roles,
  });

  return (
    <>
      <ProjectHeader
        title="Diogo Izele - About"
        description="A little about who Diogo Izele is"
        keywords="About Diogo Izele"
        url="https://diogoizele.com/about"
      />
      <Container>
        <AnimatedTitle id="about-me">
          <Link href="#about-me">{strings.about.title}</Link>
        </AnimatedTitle>
        <Content>
          <ImageContainer>
            <Memoji
              src={avatarImg}
              quality={100}
              alt="Diogo Izele's apple memoji"
              width={256}
              height={256}
              priority
            />
          </ImageContainer>
          <PersonalContainer>
            <Text.Body
              component="p"
              fontSize="1.6rem"
              fontStyle={FONT_STYLES.BOLD}
              color={colors.textTertiary}
            >
              {strings.about.greetings.first}
            </Text.Body>
            <Text.Subtitle
              component="strong"
              fontStyle={FONT_STYLES.BOLD}
              color={colors.textSecondary}
              fontSize="2.5rem"
            >
              {strings.about.greetings.second}
            </Text.Subtitle>
            <Text.Title
              component="h2"
              fontSize="4.5rem"
              fontStyle={FONT_STYLES.BLACK}
            >
              {strings.about.greetings.third}
            </Text.Title>
            <Text.Body
              component="p"
              fontSize="1.6rem"
              fontStyle={FONT_STYLES.BOLD}
              color={colors.textTertiary}
            >
              {strings.about.greetings.fourth}
            </Text.Body>
            <Text.Title color={colors.secondary} fontSize="1.9rem">
              <span>{roles}</span>
              <Cursor cursorColor={colors.secondary} />
            </Text.Title>
          </PersonalContainer>
        </Content>
        <Content>
          <ParagraphiesContainer>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {strings.about.presentation.first}
            </Text.Body>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {strings.about.presentation.second}
            </Text.Body>
            <Text.Body fontSize="1.1rem" mediaSize="1.2rem">
              {strings.about.presentation.third}
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
        <AnimatedTitle id="experiences">
          <Link href="#experiences">Experiences.</Link>
        </AnimatedTitle>
        <Companies
          companies={injectAppIconsAtContentful(experiences, {
            method: "hightlight",
          })}
        />
        <AnimatedTitle id="education">
          <Link href="#education">Education.</Link>
        </AnimatedTitle>
        <Education education={education} />
        <SpotifyCard {...spotify} />
        <Footer>
          <Text.Body color={(theme) => theme.colors.textQuaternary}>
            <span></span>
            Ready for new challenges and opportunities
          </Text.Body>
        </Footer>
      </Container>
    </>
  );
}

// https://nextjs.org/learn/basics/api-routes/api-routes-details
export async function getStaticProps() {
  try {
    // const spotify = await currentPlayingTrack();

    const experiences = (await getExperienceContent()) ?? [];
    const education = (await getEducationContent()) ?? [];

    return {
      props: {
        experiences,
        education,
      },
      revalidate: 60 * 2 + 30, // 2 minutes and 30 seconds
    };
  } catch (error) {
    logs("Static props error: ", error);

    return {
      props: {},
    };
  }
}
