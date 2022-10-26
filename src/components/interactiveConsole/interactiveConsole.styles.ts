import styled from "styled-components";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";

export const Container = styled.div`
  display: flex;
  width: 100%;

  gap: 0.5rem;
  /* padding-bottom: rem; */
`;

interface InputProps {
  isFocused: boolean;
}

export const Input = styled.div.attrs({
  contentEditable: true,
})<InputProps>`
  width: 100%;
  max-width: 600px;

  background: transparent;
  border: none;
  outline: none;

  gap: 0.5rem;

  font-size: 1.1rem;

  color: ${({ theme }) => theme.colors.textPrimary};

  position: relative;
  display: block;
  width: max-content;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &::before {
    background: ${({ theme }) => {
      const { themeMode } = useThemeMode();
      return themeMode === ThemeMode.DARK
        ? theme.colors.backgroundSecondary
        : theme.colors.white;
    }};

    animation: typewriter 3s steps(25) 1s forwards;
  }

  &::after {
    width: ${({ isFocused }) => (!isFocused ? "0.125rem" : 0)};
    background: ${({ theme }) => theme.colors.textSecondary};
    animation: typewriter 3s steps(25) 1s forwards,
      blink 700ms steps(25) infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;