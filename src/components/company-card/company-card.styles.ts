import Image from "next/image";
import styled from "styled-components";

import * as colors from "styles/colors";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  width: 100%;

  border-radius: 6px;

  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  
`;

export const CompanyLogo = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled};

  width: 120px;
  height: 120px;

  padding: 1.4rem;

  background-color: ${colors.gray.A200};
`;

export const RightSize = styled.div`
  flex: 1;
`;
export const LeftSize = styled.div`
  flex: 1;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 0.5rem;
`;
