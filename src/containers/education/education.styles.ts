import Image from "next/image";
import styled from "styled-components";

interface SelecterIndicatorProps {
  positionY: number;
}

const MILISECONDS_ANIMATION_DURATION = 500;

export const Container = styled.section`
  display: flex;

  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SelecterContainer = styled.aside`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;
`;

export const SelecterIndicator = styled.span<SelecterIndicatorProps>`
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
