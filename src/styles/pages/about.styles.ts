import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 900px;
  width: calc(100% - 8rem);

  height: calc(100vh - 10rem);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  @media (max-width: 590px) {
    flex-direction: column;
  }
`;

export const Title = styled.strong`
  font-size: 3.5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.primary};

  padding-top: 3rem;
`;

export const Memoji = styled(Image)``;

export const ImageContainer = styled.div`
  height: 100%;

  flex: 1;

  display: flex;
  align-items: center;
`;

export const PersonalContainer = styled.div`
  flex: 1;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.5rem;
`;

export const Role = styled.h1`
  font-size: 1.6rem;

  color: ${({ theme }) => theme.colors.textDisabled};
`;

export const Name = styled.strong`
  font-size: 4.5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 590px) {
    font-size: 3.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 590px) {
    /* font-size: 1rem; */

    text-align: justify;
  }
`;
