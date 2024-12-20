import { useThemeMode } from "hooks";
import styled from "styled-components";

import { ThemeMode } from "styles/theme.types";
import * as colors from "styles/colors";
import Link from "next/link";

export const Container = styled.div`
  max-height: 380px;
  max-width: 666px;

  height: 80%;
  width: 80%;

  position: relative;
  overflow: hidden;
  box-sizing: content-box;

  background: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundSecondary
      : theme.colors.white;
  }};
  border-radius: 12px;
  border: 1px solid
    ${({ theme }) => {
      const { themeMode } = useThemeMode();

      return themeMode === ThemeMode.DARK
        ? theme.colors.backgroundAlternative
        : theme.colors.backgroundQuaternary;
    }};

  @media screen and (max-width: 590px) {
    height: 100%;
    width: 90%;
  }
`;

export const TerminalContentContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  height: 24rem;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TerminalCommandContainer = styled.span`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  height: 15.6rem;
  gap: 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media (max-width: 1080px) {
    height: 17rem;
  }

  @media (max-width: 720px) {
    height: 18.5rem;
  }
`;

export const TerminalHeaderContainer = styled.header`
  width: 100%;
  height: 32px;

  max-width: 666px;

  background: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.textPrimary
      : theme.colors.backgroundPrimary;
  }};

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid;

  border-bottom-color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundAlternative
      : theme.colors.backgroundQuaternary;
  }};
`;

export const TerminalButtonsContainer = styled.div`
  position: absolute;

  left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

interface TerminalButtonProps {
  color: string;
}

export const TerminalButton = styled.div<TerminalButtonProps>`
  width: 14px;
  height: 14px;

  border-radius: 8px;
  border: none;

  background: ${({ color }) => color};

  cursor: pointer;

  transition: filter 180ms ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const TerminalTitle = styled.strong`
  display: inline-block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-weight: 700;
  font-size: 0.9rem;
  line-height: 0;

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundSecondary
      : theme.colors.textTertiary;
  }};
`;

export const TerminalLsCommands = styled.span`
  font-size: 1.2rem;

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.textSecondary
      : theme.colors.textPrimary;
  }};

  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TerminalInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 1rem;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: absolute;
  bottom: 0.8rem;
`;

export const TerminalInputOverlay = styled.div`
  height: 32px;
  padding-left: 1rem;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: absolute;
  bottom: 0.8rem;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;

export const Divider = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 1px;
  background: ${({ theme }) => theme.colors.backgroundQuaternary};
  opacity: 0.1;
`;

export const TerminalInputContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
`;

export const Path = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const TerminalResponse = styled.pre<{ isCommand?: boolean }>`
  font-size: 0.9rem;

  padding: 0 1rem;
  color: ${({ theme, isCommand }) =>
    isCommand ? theme.colors.textPrimary : theme.colors.textTertiary};
  white-space: pre-wrap;
`;

export const TerminalRecognizedCommand = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const TerminalResponseContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;
