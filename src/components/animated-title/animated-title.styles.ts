import styled from "styled-components";

type TitleStyledProps = {
  lineWidth: number;
};

export const Title = styled.h2<TitleStyledProps>`
  font-size: 3.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 3rem;
  padding-bottom: 1rem;
  width: fit-content;

  @media (max-width: 590px) {
    padding-top: 5rem;
  }

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: ${({ lineWidth }) => lineWidth}rem;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 8px;
    transition: width 0.3s ease-out;
  }
`;
