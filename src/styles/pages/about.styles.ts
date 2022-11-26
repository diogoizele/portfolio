import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  width: calc(100% - 8rem);

  padding: 3rem;
  padding-top: 8rem;
  min-height: calc(100vh - 10rem);

  @media (max-width: 590px) {
    padding: 0;
    padding-top: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding-top: 1rem;
    padding-bottom: 5rem;
  }
`;

export const Title = styled.strong`
  font-size: 3.5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.primary};

  padding-top: 3rem;
  padding-bottom: 1rem;
`;

export const Memoji = styled(Image)``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;

  gap: 0.5rem;

  @media (max-width: 590px) {
    width: 100%;
    gap: 1rem;
  }
`;
