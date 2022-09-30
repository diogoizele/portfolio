import { TerminalCommand, TerminalResponse } from "components/index";
import { useEffect, useState } from "react";

import styles from "./terminal.module.scss";

const TerminalHeader = () => {
  return (
    <header className={styles["terminal-header"]}>
      <div className={styles["terminal-buttons"]}>
        <div
          className={`${styles["terminal-button"]} ${styles["terminal-button-close"]}`}
        />
        <div
          className={`${styles["terminal-button"]} ${styles["terminal-button-minimize"]}`}
        />
        <div
          className={`${styles["terminal-button"]} ${styles["terminal-button-maximize"]}`}
        />
      </div>
      <span className={styles["terminal-title"]}>Terminal</span>
    </header>
  );
};

export const Terminal = () => {
  return (
    <section className={styles.terminal}>
      <TerminalHeader />
      <div className={styles["terminal-content"]}>
        <TerminalCommand path="~/porfolio" command="pwd" />
        <TerminalResponse response="c:/diogoizele/portfolio" />
        <TerminalCommand
          path="~/porfolio"
          command="echo Hello, my name is Diogo Izele"
        />
        <TerminalResponse response="Hello, my name is Diogo Izele" />
        <TerminalCommand path="~/porfolio" command="echo I'm a Web developer" />
        <TerminalResponse response="I'm a Web developer" />
        <TerminalCommand
          path="~/porfolio"
          command="echo this is my portfolio"
          animated
        />
      </div>
    </section>
  );
};
