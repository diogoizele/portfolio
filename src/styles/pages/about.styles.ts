import Image from "next/image";
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  margin-top: 3rem;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 760px) {
    gap: 3rem;
  }

  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1rem;
    padding-bottom: 1rem;

    gap: 2rem;
  }
`;

export const Title = styled.strong`
  font-size: 3.5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.primary};

  padding-top: 3rem;
  padding-bottom: 1rem;

  @media (max-width: 590px) {
    padding-top: 5rem;
  }
`;

export const Memoji = styled(Image)``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.5rem;

  @media (max-width: 590px) {
    gap: 1rem;
  }
`;

export const ParagraphiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;

  gap: 1rem;

  @media (max-width: 590px) {
    gap: 2rem;
  }
`;

export const MyPicture = styled(Image)`
  border-radius: 50%;

  width: 304px;
  height: 304px;
  min-width: 304px;
  min-height: 304px;

  object-fit: cover;
  object-position: top;

  filter: grayscale(0.2);

  box-shadow: 0 0 4px ${({ theme }) => theme.colors.black};
  transition: filter 200ms;

  &:hover {
    filter: grayscale(0.1);
  }

  @media (max-width: 760px) {
    width: 256px;
    height: 256px;
    min-width: 256px;
    min-height: 256px;
  }

  @media (max-width: 590px) {
    filter: grayscale(0);
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.black};
  }
`;
