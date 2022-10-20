import { useThemeMode } from "hooks";
import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

export const Container = styled.div`
  max-height: 380px;
  max-width: 666px;

  height: 80%;
  width: 80%;

  background: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundSecondary
      : theme.colors.white;
  }};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundAlternative};

  overflow: hidden;

  @media screen and (max-width: 590px) {
    height: 100%;
    width: 90%;
  }
`;

export const TerminalContentContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TerminalHeaderContainer = styled.header`
  width: 100%;
  height: 36px;

  background: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.white
      : theme.colors.backgroundPrimary;
  }};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-bottom: 1px solid;

  border-bottom-color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundAlternative
      : theme.colors.backgroundSecondary;
  }};
`;

export const TerminalButtonsContainer = styled.div`
  position: absolute;

  left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

interface TerminalButtonProps {
  color: string;
}

export const TerminalButton = styled.div<TerminalButtonProps>`
  width: 16px;
  height: 16px;

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

  font-weight: 500;
  font-size: 1.1rem;
  line-height: 0;

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? theme.colors.backgroundSecondary
      : theme.colors.backgroundDisabled;
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
