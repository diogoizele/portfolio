import { Line } from "./terminalResponse.styles";

interface TerminalResponseProps {
  response: string;
}

export const TerminalResponse = ({ response }: TerminalResponseProps) => {
  return <Line>{response}</Line>;
};
