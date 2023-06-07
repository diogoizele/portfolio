import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  width: calc(100% - 8rem);

  padding: 3rem;
  padding-top: 8rem;
  padding-bottom: 5rem;
  min-height: calc(100vh - 10rem);

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    padding: 0;
    padding-top: 3rem;
    padding-bottom: 3rem;

    width: 85%;

    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.primary};

  padding-top: 3rem;
  padding-bottom: 1rem;

  @media (max-width: 590px) {
    padding-top: 5rem;
  }
`;
