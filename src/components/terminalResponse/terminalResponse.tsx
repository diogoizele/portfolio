import styles from "./terminalResponse.module.scss";

interface TerminalResponseProps {
  response: string;
}

export const TerminalResponse = ({ response }: TerminalResponseProps) => {
  return <p className={styles["terminal-response"]}>{response}</p>;
};
