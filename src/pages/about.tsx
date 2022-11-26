import { useTheme } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { Text } from "components";
import avatarImg from "assets/images/memoji-diogo-izele.png";

import {
  Container,
  Content,
  ImageContainer,
  Memoji,
  PersonalContainer,
  Title,
} from "styles/pages/about.styles";
import { FONT_STYLES } from "styles";

const ROLES = ["Software", "Web", "Mobile", "Front-end"];
const DESCRIPTION =
  "Hello World! I've been studying software development for about 3 years. I graduated as a computer technician at the Instituto Federal Sul-Riograndense, where I had my first contact with programming using the JavaScript language. I am currently studying Bachelor of Information Systems to increase my academic proficiency in programming and intend to become an excellent software engineer soon.";

export default function About() {
  const { colors } = useTheme();

  const [roles] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: ROLES,
  });

  return (
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
        <Text.Body fontSize="1.1rem">{DESCRIPTION}</Text.Body>
      </Content>
    </Container>
  );
}
