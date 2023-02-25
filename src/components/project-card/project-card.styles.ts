import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 200px;
  width: 400px;

  padding: 1rem;

  flex-direction: column;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.textDisabled};
`;
