import { useCallback, useEffect, useRef, useState } from "react";
import { Input, Container } from "./interactiveConsole.styles";

interface InteractiveConsoleProps {
  onAddCommand: (command: string) => void;
}

let INITIAL_TEXT = "echo this is my portfolio";
const MAX_CHARACTER_SIZE = 240;

export const InteractiveConsole = ({
  onAddCommand,
}: InteractiveConsoleProps) => {
  const [text, setText] = useState(INITIAL_TEXT);
  const [isFocused, setIsFocused] = useState(false);

  const contentEditableDivRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      const text = e.target.innerText.replace(/(\r\n|\n|\r)/gm, "");
      const keyCode = e.code;

      if (text.length > MAX_CHARACTER_SIZE) {
        return;
      }

      if (
        typeof window.getSelection != "undefined" &&
        typeof document.createRange != "undefined"
      ) {
        let range = document.createRange();
        range.selectNodeContents(contentEditableDivRef.current);
        range.collapse(false);
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }

      setText(text);

      if (keyCode === "Enter" && text) {
        e.preventDefault();
        onAddCommand(text);
        setText("");
      } else if (keyCode === "Enter" && !text) {
        e.preventDefault();
      }
    },
    [onAddCommand]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    INITIAL_TEXT = "";
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", (e) => {
        if (e.code !== "Enter") {
          contentEditableDivRef.current.focus();
        }
      });
    }
  }, [handleFocus]);

  return (
    <Container>
      <Input
        suppressContentEditableWarning
        ref={contentEditableDivRef}
        isFocused={isFocused}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleChange}
      >
        {text}
      </Input>
    </Container>
  );
};
