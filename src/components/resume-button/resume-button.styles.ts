import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.colors.primary};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};

  width: fit-content;

  position: relative;

  @media screen and (max-width: 590px) {
    position: static;
  }
`;

export const IconContainer = styled.span`
  height: 3rem;
  width: 3rem;

  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;

  @media screen and (max-width: 590px) {
    position: static;
  }
`;

export const Text = styled.span`
  white-space: nowrap;

  position: relative;

  padding-right: 1rem;
  left: 3rem;

  @media screen and (max-width: 590px) {
    position: static;
  }
`;

export const ButtonLink = styled(Link)`
  max-width: 3rem;

  overflow: hidden;
  transition: max-width 400ms ease-in-out;

  padding-right: 3rem;

  height: 3rem;

  overflow: hidden;

  border-radius: 3rem;
  border: 0;

  font-weight: bold;
  font-size: 1.1rem;

  gap: 0.8rem;

  transition: max-width 800ms !important;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.backgroundPrimary};

  &:hover {
    max-width: 30rem;
  }

  @media screen and (max-width: 590px) {
    max-width: fit-content;

    gap: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
