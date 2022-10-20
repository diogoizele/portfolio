import { useThemeMode } from "hooks";
import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

export const Container = styled.div`
  position: fixed;
  left: 1rem;

  padding: 1rem;
  box-shadow: 0 0 1px
      ${({ theme }) => {
        const { themeMode } = useThemeMode();

        return themeMode === ThemeMode.DARK
          ? theme.colors.backgroundDisabled
          : theme.colors.backgroundSecondary;
      }},
    inset 0 0 2px
      ${({ theme }) => {
        const { themeMode } = useThemeMode();

        return themeMode === ThemeMode.DARK
          ? theme.colors.backgroundDisabled
          : theme.colors.backgroundSecondary;
      }};

  background: rgba(255, 255, 255, 0.051);

  border-radius: 16px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 590px) {
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;

    gap: 2rem;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    box-shadow: none;
    background: transparent;
  }
`;
