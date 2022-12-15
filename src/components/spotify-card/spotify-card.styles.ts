import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(Link)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  align-items: center;
  justify-content: space-between;

  min-height: 6rem;

  padding: 1rem;
  border-radius: 6px;

  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.textDisabled};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  @media (max-width: 590px) {
    flex-direction: column;

    gap: 1rem;

    padding: 0.8rem;

    min-height: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;

  height: 100%;

  flex-direction: column;

  @media (max-width: 590px) {
    align-items: center;

    flex-direction: row;

    gap: 0.5rem;
  }
`;

export const Icon = styled(FaSpotify)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  gap: 0.6rem;

  @media (max-width: 590px) {
    align-items: center;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 64px;

  border-radius: 64px;
  overflow: hidden;
`;

export const SongImage = styled(Image)`
  height: 100%;
  width: 100%;

  object-fit: cover;

  border-radius: 64px;
`;
