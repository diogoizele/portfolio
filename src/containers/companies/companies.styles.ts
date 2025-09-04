import styled from "styled-components";
import { alpha, linearGradient } from "utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;

  gap: 1rem;
  background: ${({ theme }) => alpha(theme.colors.backgroundPrimary, 0.9)};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CompanyContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  &::after {
    content: "";
    flex: 1;
    background-color: ${(props) =>
      alpha(props.theme.colors.textQuaternary, 0.2)};
    height: 1px;
    margin-left: 1rem;
  }

  &::before {
    content: "";
    flex: 1;
    background-color: ${(props) =>
      alpha(props.theme.colors.textQuaternary, 0.2)};
    height: 1px;
    margin-right: 1rem;
  }
`;
