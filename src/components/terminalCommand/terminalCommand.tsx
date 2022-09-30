import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import styles from "./terminal.module.scss";

interface TerminalCommandProps {
  command: string;
  animated?: boolean;
}

export const TerminalCommand = ({
  command,
  animated,
}: TerminalCommandProps) => {
  return (
    <p className={styles["terminal-line"]}>
      <HiOutlineArrowNarrowRight
        size={20}
        className={styles["terminal-line-starts-arrow"]}
      />{" "}
      ~{" "}
      <span
        className={`${styles["terminal-command"]} ${
          animated ? styles["terminal-command-animated"] : ""
        }`}
      >
        {command}
      </span>
    </p>
  );
};
