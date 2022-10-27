import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  Container,
  Content,
  Description,
  ImageContainer,
  Memoji,
  Name,
  PersonalContainer,
  Role,
  Title,
} from "styles/pages/about.styles";

import avatarImg from "assets/images/memoji-diogo-izele.webp";
import { useTheme } from "styled-components";

const ROLES = ["Developer", "Software", "Web", "Mobile"];
const DESCRIPTION =
  "Hi guys, nice to meet you, I'm a web and mobile developer from Brazil. I am passionate about technology and I seek to understand how things work under the hood.";

export default function About() {
  const { colors } = useTheme();

  const [text] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: ["Diogo Izele", ...ROLES],
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
            layout="fixed"
          />
        </ImageContainer>
        <PersonalContainer>
          <Role>Hi there! 👋</Role>
          <Name>
            <span>{text}</span>
            <Cursor cursorColor={colors.primary} />
          </Name>
          <Description>{DESCRIPTION}</Description>
        </PersonalContainer>
      </Content>
    </Container>
  );
}
