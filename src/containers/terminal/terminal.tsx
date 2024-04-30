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
import { useApp } from "../../hooks";

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
  const { strings } = useApp();

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
            <TerminalLsLink href="/">
              {strings.home.terminal.home}
            </TerminalLsLink>
            <TerminalLsLink href="/about">
              {strings.home.terminal.about}
            </TerminalLsLink>
            <TerminalLsLink href="/projects">
              {strings.home.terminal.projects}
            </TerminalLsLink>
            <TerminalLsLink href="/contact">
              {strings.home.terminal.contact}
            </TerminalLsLink>
          </TerminalLsLinksContainer>
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand command="cd" argument="../" path="~/portfolio" />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            command="echo"
            argument={strings.home.terminal.greetings}
            path="~"
          />
          <TerminalResponse response={strings.home.terminal.greetings} />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            command="echo"
            argument={strings.home.terminal.subtitle}
            path="~"
          />
          <TerminalResponse response={strings.home.terminal.subtitle} />
        </TerminalCommandContainer>
        <TerminalCommandContainer>
          <TerminalCommand
            animated
            command="echo"
            argument={[
              strings.home.terminal.typing.first,
              strings.home.terminal.typing.second,
            ]}
            path="~"
          />
        </TerminalCommandContainer>
      </TerminalContentContainer>
    </Container>
  );
};
