import { useThemeMode } from "hooks";
import Image from "next/image";
import styled from "styled-components";

import * as colors from "styles/colors";
import { ThemeMode } from "styles/theme.types";
import { linearGradient } from "utils";

const IMAGE_SIZE = "20rem";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  height: 20rem;
  width: 30rem;

  box-sizing: content-box;

  padding: 2rem;
  padding-left: calc(${IMAGE_SIZE} + 2rem);

  overflow: hidden;

  border-radius: 6px;

  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  transition: box-shadow 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.backgroundAlternative};
  }

  @media (max-width: 590px) {
    background: ${({ theme }) => theme.colors.backgroundPrimary};

    padding: 1.5rem;
    width: 90%;

    height: 24rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: ${IMAGE_SIZE};
  min-width: ${IMAGE_SIZE};

  height: 100%;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: 590px) {
    max-width: unset;
    right: 0;
    bottom: 0;

    opacity: 0.05;

    border-radius: 6px;
  }
`;

export const CompanyLogo = styled(Image)`
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  width: 100%;
  height: 100%;

  padding: 3rem;

  background-color: ${colors.gray.A200};
`;

export const ShadowRightImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: ${IMAGE_SIZE};

  background: ${({ theme }) => {
    const { themeMode } = useThemeMode();
    const transparent = "rgba(0, 0, 0, 0)";

    const func = (deg: number, left: string, right: string) =>
      `linear-gradient(${deg}deg, ${left} 0%, ${right} 100%)`;

    if (themeMode === ThemeMode.DARK) {
      return func(90, transparent, theme.colors.backgroundSecondary);
    }

    return func(90, transparent, theme.colors.backgroundSecondary);
  }};

  z-index: 1;

  display: flex;

  @media (max-width: 590px) {
    position: unset;
  }
`;

export const HightlightsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  gap: 1rem;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ContainerHighlightCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;

  align-items: center;
  justify-content: center;
  text-align: center;

  width: 6rem;
  height: 6rem;

  padding: 1rem;

  border-radius: 100%;
  /* border-radius: 6px; */

  /* box-shadow: 0 0 1px 1px ${({ theme }) =>
    theme.colors.backgroundTertiary}; */

  transition: box-shadow, transform 280ms;

  &:hover {
    background: ${({ theme }) =>
      linearGradient(180, [theme.colors.tertiary, theme.colors.quaternary])};
    box-shadow: none;
    transform: scale(1.05);
  }
`;
