import Link from "next/link";
import styled from "styled-components";

export const Container = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};

  list-style: none;

  height: 5rem;
  width: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-sizing: content-box;
  border-radius: 8px;

  border: 2px solid transparent;

  transition: all 180ms ease-in-out;

  transform: scale(1.2);

  &:hover {
    transform: translateX(2px) scale(1.1);

    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 740px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  text-align: center;
`;
