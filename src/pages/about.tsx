import { useEffect } from "react";
import { useTheme } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  CompanyCard,
  Text,
  ResumeButton,
  SpotifyCard,
  ProjectHeader,
} from "components";

import { FONT_STYLES } from "styles";
import {
  BEHAVIORAL,
  CONTACT,
  EDUCATION,
  PRESENTATION,
  ROLES,
} from "utils/static";
import { currentPlayingTrack } from "lib/spotify";
import { Companies } from "containers";

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

import type { SpotifyCurrentTrackResponse } from "types";

interface Props {
  spotify?: SpotifyCurrentTrackResponse;
}

export default function About({ spotify }: Props) {
  const { colors } = useTheme();

  const [roles] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: ROLES,
  });

  useEffect(() => {
    console.log("Spotify: ", spotify);
  }, [spotify]);

  return (
    <>
      <ProjectHeader
        title="Diogo Izele - About"
        description="A little about who Diogo Izele is"
        keywords="About Diogo Izele"
        url="https://diogoizele.com/about"
      />
      <Container>
        <Title>About Me.</Title>
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
        <Title>Experiences.</Title>
        <Companies />
        <Title>Education.</Title>
        <Content>
          {EDUCATION.map((companyProps) => (
            <CompanyCard key={companyProps.id} {...companyProps} />
          ))}
        </Content>
        <SpotifyCard {...spotify} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const spotify: SpotifyCurrentTrackResponse = await currentPlayingTrack();

  // https://nextjs.org/learn/basics/api-routes/api-routes-details

  return {
    props: {
      spotify,
    },
    revalidate: 60 * 2 + 30, // 2 minutes and 30 seconds
  };
}
