import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 1120px;
  width: calc(100% - 8rem);
  min-height: calc(100vh);

  padding: 3rem;
  padding-top: 8rem;
  padding-bottom: 5rem;

  @media (max-width: 1120px) {
    flex-direction: column;
  }

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    padding: 0;
    padding-top: 5rem;
    padding-bottom: 3rem;

    width: 85%;

    text-align: center;
  }
`;

export const SocialMedias = styled.aside`
  display: flex;

  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  padding: 2rem;

  flex: 1;
`;

export const EmailForm = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  padding: 2rem;

  flex: 1;
`;

export const TextContainer = styled.div`
  width: 20rem;
  text-align: center;

  @media (max-width: 590px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  padding: 0 2rem;

  border: none;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  font-size: 1.1rem;
  font-weight: 500;

  border-radius: 6px;

  cursor: pointer;

  transition: background-color 180ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`;
