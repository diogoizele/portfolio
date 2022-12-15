import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: row;
  gap: 2rem;

  align-items: center;
  justify-content: space-between;

  height: 6rem;

  padding: 1rem;
  border-radius: 6px;

  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.textDisabled};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;

  height: 100%;

  flex-direction: column;
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
    align-items: flex-start;
    text-align: justify;
  }
`;
