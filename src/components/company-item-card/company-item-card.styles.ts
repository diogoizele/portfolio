import Image from "next/image";
import styled from "styled-components";

import * as colors from "styles/colors";

interface CurrentCompanyProps {
  isHighlighted: boolean;
  isCurrentJob: boolean;
}

export const LogoContainer = styled.div<CurrentCompanyProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 4px solid ${({ theme }) => theme.colors.backgroundTertiary};
  border-radius: 100%;
  overflow: hidden;
  border-width: ${({ isCurrentJob }) => (isCurrentJob ? "8px" : "4px")};

  opacity: ${({ isHighlighted }) => (isHighlighted ? 1 : 0.9)};
  filter: ${({ isHighlighted }) =>
    isHighlighted ? "grayscale(0)" : "grayscale(100%)"};
  border-color: ${({ isHighlighted, theme }) =>
    isHighlighted && theme.colors.secondary};

  margin-top: ${({ isCurrentJob }) => isCurrentJob && "-6px"};

  transition: border-color, filter, opacity 480ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  box-sizing: content-box;

  padding: 0.5rem;

  overflow: hidden;

  border-radius: 12px;

  &:hover ${LogoContainer} {
    transition: border-color, filter, opacity 480ms;

    border-color: ${({ theme }) => theme.colors.secondary};
    filter: grayscale(0);
    opacity: 1;
  }
`;

export const RoleContainer = styled.div`
  text-align: center;
`;

export const CompanyLogo = styled(Image)`
  padding: 0.5rem;

  background-color: ${colors.gray.A200};
`;
