import { useEffect } from "react";
import { useTheme } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Head from "next/head";

import { CompanyCard, Text, ResumeButton, SpotifyCard } from "components";
import avatarImg from "assets/images/memoji-diogo-izele.png";
import myPictureImg from "assets/images/i-reading-pic.jpeg";

import { FONT_STYLES } from "styles";
import {
  BEHAVIORAL,
  COMPANIES,
  CONTACT,
  EDUCATION,
  PRESENTATION,
  ROLES,
} from "utils/static";
import { currentPlayingTrack } from "lib/spotify";

import {
  Container,
  Content,
  ImageContainer,
  Memoji,
  MyPicture,
  ParagraphiesContainer,
  PersonalContainer,
  SpotifyContainer,
  Title,
} from "styles/pages/about.styles";

import type { SpotifyCurrentTrackResponse } from "types";

interface Props {
  spotify: SpotifyCurrentTrackResponse;
}

export default function About({ spotify }: Props) {
  const { colors } = useTheme();

  const [roles] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: ROLES,
  });

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="A1TKe7Phyl32i1AUX65XFETd0u8blEM119nHMIx6yY0"
        />
        <title>Diogo Izele - About</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4ce3c2" />
        <meta name="msapplication-TileColor" content="#4ce3c2" />
        <meta name="theme-color" content="#121214" />
        <meta name="description" content="A little about who Diogo Izele is" />
        <meta name="keywords" content="About Diogo Izele" />
        <meta name="author" content="Diogo Izele" />
        <meta name="copyright" content="© 2022 Diogo Izele" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Diogo Izele - About" />
        <meta
          property="og:description"
          content="A little about who Diogo Izele is"
        />
        <meta property="og:url" content="https://diogoizele.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/igc7k1N.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="http://www.diogoizele.com" />
        <meta name="twitter:title" content="Diogo Izele" />
        <meta
          name="twitter:description"
          content="A little about who Diogo Izele is"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/igc7k1N.png"
        />
        <link rel="canonical" href="https://diogoizele.com" />
      </Head>
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
        <Content>
          {COMPANIES.map((companyProps) => (
            <CompanyCard key={companyProps.id} {...companyProps} />
          ))}
        </Content>
        <Title>Education.</Title>
        <Content>
          {EDUCATION.map((companyProps) => (
            <CompanyCard key={companyProps.id} {...companyProps} />
          ))}
        </Content>
        {!spotify?.item?.explicit && (
          <SpotifyContainer>
            <Text.Subtitle>
              {spotify.is_playing ? "Listening Now" : "Last Song I've Listened"}
            </Text.Subtitle>
            <SpotifyCard {...spotify} />
          </SpotifyContainer>
        )}
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
