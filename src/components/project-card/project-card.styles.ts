import Link from "next/link";
import styled, { css } from "styled-components";

type LanguageBulletColorProps = {
  color: string;
};

const ICON_SIZE = 24;

export const Container = styled.div`
  display: flex;

  height: 200px;
  width: 400px;

  padding: 1rem;
  gap: 1rem;

  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.textDisabled};

  @media (max-width: 760px) {
    width: 100%;

    height: 165px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 0.8rem;
`;

export const LanguagesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.5rem;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageBullet = styled.span<LanguageBulletColorProps>`
  display: inline-block;

  height: 12px;
  width: 12px;

  border-radius: 50%;
  background-color: ${({ color }) => color};

  margin: 0 0.2rem;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  width: 2.5rem;
  min-height: 2.5rem;
  min-width: 2.5rem;

  border-radius: 10px;

  border-color: ${({ theme }) => theme.colors.secondary};
  border-style: solid;
  border-width: 2px;
  transition: 0.1s;

  svg {
    transform: scale(1.2);

    transition: 0.2s;

    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    svg {
      color: ${({ theme }) => theme.colors.backgroundSecondary};
    }
  }
`;

export const SkeletonsClasses = {
  title: {
    width: "30%",
    height: "2rem",
  },
  description: {
    width: "100%",
    height: "5rem",
  },
  footer: {
    width: "100%",
    height: "1rem",
  },
};
