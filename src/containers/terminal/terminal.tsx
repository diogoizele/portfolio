import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import { TerminalCommand, TerminalResponse } from "components";

import {
  Container,
  TerminalButton,
  TerminalButtonsContainer,
  TerminalCommandContainer,
  TerminalContentContainer,
  TerminalHeaderContainer,
  TerminalLsLink,
  TerminalLsLinksContainer,
  TerminalTitle,
} from "./terminal.styles";

const TerminalHeader = () => {
  const theme = useTheme();

  return (
    <TerminalHeaderContainer>
      <TerminalButtonsContainer>
        <TerminalButton color={theme.colors.error} />
        <TerminalButton color={theme.colors.warning} />
        <TerminalButton color={theme.colors.success} />
      </TerminalButtonsContainer>
      <TerminalTitle>Terminal</TerminalTitle>
    </TerminalHeaderContainer>
  );
};

interface TerminalCommandProps {
  id: string;
  command: string;
  response: string | null;
  path: string;
}

export const Terminal = () => {
  const { push } = useRouter();

  return (
    <Container>
      <TerminalHeader />
      <TerminalContentContainer>
        <TerminalCommandContainer>
          <TerminalCommand command="pwd" path="~/portfolio" />
          <TerminalResponse response="/Users/diogoizele/portfolio" />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand command="ls" path="~/portfolio" />
          <TerminalLsLinksContainer>
            <Link href="/">
              <TerminalLsLink href="/">Home</TerminalLsLink>
            </Link>
            <Link href="/about">
              <TerminalLsLink href="/about">About</TerminalLsLink>
            </Link>
            <Link href="/projects">
              <TerminalLsLink href="/projects">Projects</TerminalLsLink>
            </Link>
            <Link href="/contact">
              <TerminalLsLink href="/contact">Contact</TerminalLsLink>
            </Link>
          </TerminalLsLinksContainer>
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand command="cd" argument="../" path="~/portfolio" />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            command="echo"
            argument="Hello, my name is Diogo Izele"
            path="~"
          />
          <TerminalResponse response="Hello, my name is Diogo Izele" />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            command="echo"
            argument="I'm a Web developer"
            path="~"
          />
          <TerminalResponse response="I'm a Web developer" />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            animated
            command="echo"
            argument={["And this is my portfolio", "Welcome everyone!"]}
            path="~"
          />
        </TerminalCommandContainer>
      </TerminalContentContainer>
    </Container>
  );
};
