import { useTheme } from "styled-components";

import { TerminalCommand, TerminalResponse } from "components";

import {
  Container,
  TerminalButton,
  TerminalButtonsContainer,
  TerminalContentContainer,
  TerminalHeaderContainer,
  TerminalLsCommands,
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
        <TerminalCommand path="~/portfolio" command="pwd" />
        <TerminalResponse response="c:/diogoizele/portfolio" />
        <TerminalCommand path="~/portfolio" command="ls" />
        <TerminalLsCommands>Home About Contact Projects</TerminalLsCommands>
        <TerminalCommand path="~/portfolio" command="cd ../" />
        <TerminalCommand
          path="~"
          command="echo Hello, my name is Diogo Izele"
        />
        <TerminalResponse response="Hello, my name is Diogo Izele" />
        <TerminalCommand path="~" command="echo I'm a Web developer" />
        <TerminalResponse response="I'm a Web developer" />
        <TerminalCommand
          path="~"
          command="echo this is my portfolio"
          animated
        />
      </TerminalContentContainer>
    </Container>
  );
};
