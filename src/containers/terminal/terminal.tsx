import { useState } from "react";
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
import { InteractiveConsole } from "components/interactiveConsole/interactiveConsole";
import { terminalCommandReader } from "./terminal.commands";
import { terminalPaths } from "./tarminal.paths";
import { INITIAL_COMMANDS } from "./static";

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
  const [commands, setCommands] =
    useState<TerminalCommandProps[]>(INITIAL_COMMANDS);
  const [path, setPath] = useState("/");

  const handleAddCommand = (command: string) => {
    setCommands((prevCommands) => {
      const newCommand = {
        id: Math.random().toString(),
      } as TerminalCommandProps;

      if (command.startsWith("ls")) {
        if (path === "/") {
          return [
            ...prevCommands,
            { ...newCommand, command, response: "portfolio", path },
          ];
        } else if (path === "/portfolio") {
          return [
            ...prevCommands,
            {
              ...newCommand,
              command,
              response: "Home About Projects Contact",
              path,
            },
          ];
        }
      }
      return prevCommands;
    });
  };

  return (
    <Container>
      <TerminalHeader />
      <TerminalContentContainer>
        {commands.map(({ id, command, response, path }) => (
          <span key={id}>
            <TerminalCommand path={terminalPaths[path]} command={command} />
            {response && <TerminalResponse response={response} />}
          </span>
        ))}
        <InteractiveConsole onAddCommand={handleAddCommand} />
      </TerminalContentContainer>
    </Container>
  );
};
