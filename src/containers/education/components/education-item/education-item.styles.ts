import styled from "styled-components";
import Image from "next/image";

import * as colors from "styles/colors";
import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";

interface SelecterProps {
  isSelected: boolean;
}

const MILISECONDS_ANIMATION_DURATION = 500;

export const Container = styled.button<SelecterProps>`
  background-color: transparent;
  border: none;
  border-radius: 6px;

  padding: 0.6rem;

  height: 5rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  text-align: start;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.8")};

  cursor: pointer;

  transition: background-color ${MILISECONDS_ANIMATION_DURATION}ms;
`;

export const EducationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
`;

export const EducationItemCourse = styled.strong<SelecterProps>`
  font-size: 1.1rem;

  font-weight: ${({ isSelected }) => (isSelected ? "900" : "500")};

  color: ${({ isSelected, theme }) => {
    const { themeMode } = useThemeMode();

    if (!isSelected) {
      return theme.colors.primary;
    }

    if (themeMode === ThemeMode.DARK) {
      return colors.gray.A1000;
    }

    return colors.common.white;
  }};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms;
`;

export const EducationItemImageContainer = styled.div<SelecterProps>`
  width: 64px;
  height: 64px;

  background-color: red;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ isSelected }) => (isSelected ? "8px" : "64px")};

  background-color: ${({ isSelected, theme }) => {
    const { themeMode } = useThemeMode();

    if (isSelected) {
      return theme.colors.white;
    }

    if (themeMode === ThemeMode.DARK) {
      return colors.gray.A300;
    }

    return colors.gray.A100;
  }};

  border: ${({ isSelected, theme }) => {
    const { themeMode } = useThemeMode();

    if (isSelected && themeMode === ThemeMode.LIGHT) {
      return `1px solid ${colors.teal.A700}`;
    }

    if (isSelected) {
      return `1px solid ${theme.colors.secondary}`;
    }

    return "none";
  }};

  transform: ${({ isSelected }) => (isSelected ? "scale(1)" : "scale(0.7)")};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms;
`;

export const EducationItemImage = styled(Image)<SelecterProps>`
  height: 64px;
  width: 64px;

  padding: ${({ isSelected }) => (isSelected ? "0.4rem" : "0.8rem")};

  object-fit: contain;

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms;
`;

export const EducationItemPeriod = styled.p<SelecterProps>`
  font-size: 0.9rem;

  color: ${({ isSelected, theme }) => {
    const { themeMode } = useThemeMode();

    if (!isSelected) {
      return theme.colors.quaternary;
    }

    if (themeMode === ThemeMode.DARK) {
      return colors.gray.A800;
    }

    return colors.gray.A100;
  }};
`;
