import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;

  gap: 1rem;
`;

export const CompanyContainer = styled.section`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  position: relative;
`;

export const IconContainer = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;

  font-size: 2.5rem;

  z-index: 2;

  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  color: ${({ theme }) => theme.colors.textQuaternary};
`;

export const BulletsContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 0.8rem;
`;

interface BulletProps {
  isActive: boolean;
}

export const Bullet = styled.button<BulletProps>`
  width: 12px;
  height: 12px;

  border: ${({ theme, isActive }) =>
    `1px solid ${
      isActive ? theme.colors.primary : theme.colors.textQuaternary
    }`};
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.backgroundAlternative};

  border-radius: 1rem;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
`;
