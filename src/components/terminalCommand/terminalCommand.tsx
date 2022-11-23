import { useThemeMode } from "hooks";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useTheme } from "styled-components";
import { ThemeMode } from "styles/theme.types";
import {
  Argument,
  ArrowIcon,
  Command,
  Line,
  Path,
} from "./terminalCommand.styles";

interface TerminalCommandProps {
  command: string;
  animated?: boolean;
  path?: string;
  argument?: string | string[];
}

export const TerminalCommand = ({
  command,
  argument,
  animated,
  path = "~",
}: TerminalCommandProps) => {
  const isArray = Array.isArray(argument);

  const formattedArray = isArray ? argument.flat() : [argument];

  const theme = useTheme();
  const { themeMode } = useThemeMode();

  const [argumentText] = useTypewriter({
    loop: true,

    delaySpeed: 2000,
    words: formattedArray,
  });

  return (
    <Line>
      <ArrowIcon /> <Path>{path}</Path> <Command>{command}</Command>{" "}
      {argument && <Argument>{animated ? argumentText : argument}</Argument>}
      {animated && (
        <Cursor
          cursorColor={
            themeMode === ThemeMode.DARK ? theme.colors.textPrimary : "#515152"
          }
        />
      )}
    </Line>
  );
};
