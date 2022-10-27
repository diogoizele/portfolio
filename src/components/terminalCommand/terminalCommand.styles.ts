import styled, { css } from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";

export const Line = styled.p`
  display: flex;
  align-items: center;

  white-space: nowrap;
  gap: 0.5rem;

  font-size: 1.1rem;

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK ? theme.colors.textPrimary : "#515152";
  }};
`;

export const Path = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ArrowIcon = styled(HiOutlineArrowNarrowRight).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.primary};
`;

interface CommandProps {
  animated: boolean;
}

export const Command = styled.span<CommandProps>`
  display: block;
  width: max-content;

  ${({ animated }) => {
    if (animated)
      return css`
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        &::before {
          background: ${({ theme }) => {
            const { themeMode } = useThemeMode();
            return themeMode === ThemeMode.DARK
              ? theme.colors.backgroundSecondary
              : theme.colors.white;
          }};

          animation: typewriter 3s steps(25) 1s forwards;
        }

        &::after {
          width: 0.125rem;
          background: ${({ theme }) => theme.colors.textSecondary};
          animation: typewriter 3s steps(25) 1s forwards,
            blink 700ms steps(25) infinite;
        }
      `;
  }}

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;
