import styled from "styled-components";
import { linearGradient } from "utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;

  gap: 1rem;
`;

export const CompanyContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;

  position: relative;
  left: 0;
`;

interface LineProps {
  position: number;
  isShowing: boolean;
  width: number;
}

export const Line = styled.div<LineProps>`
  width: 100%;
  height: 4px;

  background: ${({ theme }) => theme.colors.backgroundTertiary};

  border-radius: 2px;

  position: absolute;
  z-index: -1;
  top: 42px;

  &::before {
    content: "";
    height: 4px;
    width: ${({ width }) => width}px;

    background: ${({ theme }) =>
      linearGradient(90, [
        theme.colors.backgroundTertiary,
        theme.colors.primary,
        theme.colors.backgroundTertiary,
      ])};

    border-radius: 2px;

    position: absolute;
    left: ${({ position }) => position}px;

    opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};

    transition: left 400ms ease-in-out, opacity 0.5s;

    box-shadow: 0 0 150px 10px ${({ theme }) => theme.colors.secondary};

    z-index: -1;
  }
`;
