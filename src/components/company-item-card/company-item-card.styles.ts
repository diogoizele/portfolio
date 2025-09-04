import styled from "styled-components";

import { alpha } from "utils";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;

  padding: 0.5rem;

  position: relative;
  padding-left: 3rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
   justify-content: center;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Skill = styled.span`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 4px;
  padding: 0.4rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0px 0px 0.5px
    ${(props) => props.theme.colors.backgroundTertiary};

  transition: all 0.2s ease-in-out;

  cursor: default;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0px 0px 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const MainTasksContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MainTask = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "▶";
    font-size: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Bullet = styled.div<{ isCurrent: boolean }>`
  position: absolute;
  top: 13px;
  left: 0;
  width: 14px;
  height: 14px;

  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 3px;
  border-style: solid;
  border-radius: 50%;

  background-color: ${({ isCurrent, theme }) =>
    !isCurrent ? theme.colors.primary : theme.colors.secondary};
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 1.6rem;
  width: 2px;
  height: calc(100% + 7px);
  background: ${({ theme }) => alpha(theme.colors.secondary, 0.5)};
`;
