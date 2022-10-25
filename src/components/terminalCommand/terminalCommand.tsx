import { ArrowIcon, Command, Line, Path } from "./terminalCommand.styles";

interface TerminalCommandProps {
  command: string;
  animated?: boolean;
  path?: string;
}

export const TerminalCommand = ({
  command,
  animated,
  path = "~",
}: TerminalCommandProps) => {
  return (
    <Line>
      <ArrowIcon /> <Path>{path}</Path>{" "}
      <Command animated={animated}>{command}</Command>
    </Line>
  );
};
