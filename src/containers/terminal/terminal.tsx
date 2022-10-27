import { useState } from "react";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";

import { TerminalCommand, TerminalResponse } from "components";

import {
  Container,
  TerminalButton,
  TerminalButtonsContainer,
  TerminalCommandContainer,
  TerminalContentContainer,
  TerminalHeaderContainer,
  TerminalTitle,
} from "./terminal.styles";
import { InteractiveConsole } from "components/interactiveConsole/interactiveConsole";
import { terminalPaths } from "./tarminal.paths";
import { INITIAL_COMMANDS } from "./static";
import { Command as CommandClass } from "models";

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
  const [commands, setCommands] = useState<TerminalCommandProps[]>(
    INITIAL_COMMANDS as TerminalCommandProps[]
  );
  const [path, setPath] = useState("~");
  const { push } = useRouter();

  function clearTerminal() {
    setCommands([]);
  }

  const handleAddCommand = (command: string) => {
    const newCommand = new CommandClass(
      command,
      path,
      setPath,
      clearTerminal,
      push
    );

    if (newCommand.commandType() !== "clear") {
      setCommands((prevCommands) => [
        ...prevCommands,
        newCommand as TerminalCommandProps,
      ]);
    }
  };

  return (
    <Container>
      <TerminalHeader />
      <TerminalContentContainer>
        {commands.map(({ id, command, response, path }) => (
          <TerminalCommandContainer key={id}>
            <TerminalCommand path={terminalPaths[path]} command={command} />
            {response && <TerminalResponse response={response} />}
          </TerminalCommandContainer>
        ))}

        <InteractiveConsole
          path={terminalPaths[path]}
          onAddCommand={handleAddCommand}
        />
      </TerminalContentContainer>
    </Container>
  );
};
