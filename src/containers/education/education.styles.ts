import Image from "next/image";
import styled from "styled-components";
import { Text } from "../../components";

interface SelecterIndicatorProps {
  positionY: number;
}

const MILISECONDS_ANIMATION_DURATION = 500;

export const Container = styled.section`
  display: flex;

  min-height: 30rem;

  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;

    min-height: auto;
  }
`;

export const SelecterContainer = styled.ul`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;
`;

export const SelecterIndicator = styled.li<SelecterIndicatorProps>`
  list-style: none;

  background-color: ${({ theme }) => theme.colors.primary};

  border: none;
  border-radius: 6px;

  padding: 0.5rem 1rem;

  height: 5rem;
  width: 100%;

  cursor: pointer;
  z-index: -1;

  transform: ${({ positionY }) => `translateY(${positionY}px)`};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms;

  position: absolute;
`;

export const EducationDetailContainer = styled.aside`
  flex: 5;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 216px;
  height: 216px;

  border-radius: 36px;

  box-sizing: border-box;

  box-shadow: ${({ theme }) => {
    if (theme.isDarkMode) {
      return `0 0 4px ${theme.colors.black}`;
    }

    return `0 0 4px ${theme.colors.backgroundTertiary}`;
  }};

  background-color: ${({ theme }) => theme.colors.white};
`;

export const InstituteImage = styled(Image)`
  padding: 3rem;

  object-fit: contain;
  object-position: center;
`;

export const InfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.5rem;
`;

export const Header = styled.header`
  display: flex;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: center;
  }
`;

export const Institution = styled(Text.Subtitle)`
  transition: all 100ms;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
