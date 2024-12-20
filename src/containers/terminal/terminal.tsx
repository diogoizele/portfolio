import { useTheme } from "styled-components";

import {
  Container,
  Divider,
  Path,
  TerminalButton,
  TerminalButtonsContainer,
  TerminalCommandContainer,
  TerminalContentContainer,
  TerminalHeaderContainer,
  TerminalInput,
  TerminalInputContainer,
  TerminalInputOverlay,
  TerminalRecognizedCommand,
  TerminalResponse,
  TerminalResponseContainer,
  TerminalTitle,
} from "./terminal.styles";

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

type TerminalResponse = {
  command: string;
  response: string;
};

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

const INITIAL_COMMANDS: TerminalResponse[] = [
  {
    command:
      'echo "Hello, my name is Diogo Izele\nI\'m a Full Stack developer and this is my personal website\nWelcome everyone!"',
    response:
      "Hello, my name is Diogo Izele\nI'm a Full Stack developer And this is my personal website\nWelcome everyone!",
  },
];

const COMMANDS = [
  "ls",
  "cd",
  "pwd",
  "history",
  "clear",
  "help",
  "about",
  "exit",
];

export const Terminal = () => {
  const [terminalResponses, setTerminalResponses] =
    useState<TerminalResponse[]>(INITIAL_COMMANDS);
  const [typedCommand, setTypedCommand] = useState("");
  const [paths, setPaths] = useState(["~"]);
  const [recognized, setRecognized] = useState(false);

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const firstWord = typedCommand.split(" ")[0];
  const remainingWords = typedCommand.split(" ").slice(1).join(" ");

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key != "Enter" || !typedCommand) {
      return;
    }

    setTypedCommand("");

    if (firstWord === "cd") {
      if (typedCommand === "cd") {
        setPaths(["~"]);
      } else if (typedCommand === "cd .." || typedCommand === "cd ../") {
        if (paths.length > 1) {
          paths.pop();
        }
      } else if (typedCommand === "cd /") {
        setPaths(["/"]);
      } else if (remainingWords.startsWith("/")) {
        setPaths(remainingWords.split("/"));
      } else {
        setPaths([...paths, remainingWords]);
      }
    }

    setTerminalResponses((responses) => [
      {
        command: typedCommand,
        response: getResponse(typedCommand),
      },
      ...responses,
    ]);

    handleProcessCommand(typedCommand);
  };

  const handleRecognizeCommand = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: command } = event.currentTarget;

    setTypedCommand(command);

    const firstWord = command.split(" ")[0];

    if (COMMANDS.includes(firstWord)) {
      setRecognized(true);
    } else {
      setRecognized(false);
    }
  };

  const handleProcessCommand = (command: string) => {
    if (command === "clear") {
      setTerminalResponses([]);
      setTypedCommand("");
    }
  };

  const getResponse = (command: string) => {
    switch (command) {
      case "ls":
        return "README.md  projects/  contact/  about/";
      case "cd":
        return "";
      case "pwd":
        return "/Users/username";
      case "history":
        return terminalResponses
          .map((response, index) => `${index + 1}. ${response.command}`)
          .reverse()
          .join("\n");
      case "clear":
        return "";
      case "help":
        return "ls - list directory contents\npwd - print name of current/working directory\nhistory - display the history list with line numbers\nabout - display information about the author\nexit - close the terminal";
      case "about":
        return "Hi! I'm a software engineer with a passion for web development. I love creating beautiful and functional websites. I'm always looking for new challenges and opportunities to learn. Feel free to contact me!";
      case "exit":
        return "Goodbye!";
      default:
        return `zsh: command not found: ${command}`;
    }
  };

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTo(
        0,
        terminalContainerRef.current.scrollHeight
      );
    }
  }, [terminalResponses]);

  return (
    <Container onClick={() => terminalInputRef.current?.focus()}>
      <TerminalHeader />
      <TerminalContentContainer>
        <TerminalCommandContainer ref={terminalContainerRef}>
          {terminalResponses.map((response, index) => (
            <TerminalResponseContainer>
              <TerminalResponse key={index} isCommand>
                {response.command}
              </TerminalResponse>
              <TerminalResponse key={`${index}-response`}>
                {response.response}
              </TerminalResponse>
            </TerminalResponseContainer>
          ))}
        </TerminalCommandContainer>
        <Divider />
        <TerminalInputContainer>
          <Path>{paths.join("/")}</Path>
          <TerminalInput
            ref={terminalInputRef}
            value={typedCommand}
            autoFocus
            placeholder="Type 'help' for commands ✨"
            onKeyDown={handlePressEnter}
            onChange={handleRecognizeCommand}
          />
          <TerminalInputOverlay>
            {recognized ? (
              <TerminalRecognizedCommand>{firstWord}</TerminalRecognizedCommand>
            ) : (
              typedCommand
            )}
          </TerminalInputOverlay>
        </TerminalInputContainer>
      </TerminalContentContainer>
    </Container>
  );
};
