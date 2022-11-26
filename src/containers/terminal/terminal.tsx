import { useTheme } from "styled-components";

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

export const Terminal = () => {
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
            <TerminalLsLink href="/">Home</TerminalLsLink>
            <TerminalLsLink href="/about">About</TerminalLsLink>
            <TerminalLsLink href="/projects">Projects</TerminalLsLink>
            <TerminalLsLink href="/contact">Contact</TerminalLsLink>
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
