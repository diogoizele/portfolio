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

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-self: flex-start;

  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TerminalCommandContainer = styled.span`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
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

export const TerminalLsLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`;

export const TerminalLsLink = styled(Link)`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.textTertiary};

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 180ms ease-in-out;
  }
`;
