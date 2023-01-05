import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import * as colors from "styles/colors";

export const Container = styled(Link)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  padding: 1rem;

  width: 100%;

  border-radius: 6px;

  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.textDisabled};
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  @media (max-width: 590px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  gap: 1rem;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 590px) {
    flex-direction: row;
    align-items: unset;
    text-align: unset;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 120px;
  min-width: 120px;
  min-width: 120px;
  max-height: 120px;
  border-radius: 50%;

  overflow: hidden;

  background: red;
`;

export const CompanyLogo = styled(Image)`
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  width: 100%;
  height: 100%;

  padding: 1.4rem;

  background-color: ${colors.gray.A200};
`;

export const Content = styled.div`
  flex: 1;
  word-spacing: 0.2rem;
  line-height: 1.2rem;
  /* text-align: justify; */
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  justify-content: center;

  gap: 0.5rem;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
