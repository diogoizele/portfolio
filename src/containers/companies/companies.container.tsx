import { useCallback, useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";

import { ComponentItemCard } from "components";
import { useWindow } from "hooks";

import {
  Bullet,
  BulletsContainer,
  CompanyContainer,
  Container,
  IconContainer,
} from "./companies.styles";

import type { CompanyProps } from "types";

interface Props {
  companies: CompanyProps[];
}

export function Companies({ companies }: Props) {
  const currentIndex = useRef(0);

  const { width } = useWindow();

  const [currentCompany, setCurrentCompany] = useState<CompanyProps>(
    companies[currentIndex.current]
  );
  const [isPaused, setIsPaused] = useState(false);

  const isMobileView = width && width <= 590;
  const miliseconds = isMobileView ? 6 : 3;

  const handleShowCompany = (company: CompanyProps, index: number) => {
    setCurrentCompany(company);
    currentIndex.current = index;
  };

  const handleToggleMobileCarrousel = () => {
    setIsPaused((current) => !current);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const moveCarrousel = useCallback(() => {
    const nextIndex = currentIndex.current + 1;
    const nextCompany = companies[nextIndex];

    if (nextCompany) {
      handleShowCompany(nextCompany, nextIndex);
    } else {
      handleShowCompany(companies[0], 0);
    }
  }, [currentIndex, companies]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(moveCarrousel, miliseconds * 1000);

      return () => clearInterval(interval);
    }
  }, [isPaused, isMobileView, miliseconds, moveCarrousel]);

  useEffect(() => {
    if (!isMobileView) {
      setIsPaused(false);
    }
  }, [isMobileView]);

  return (
    <Container>
      <CompanyContainer>
        {isMobileView && (
          <IconContainer
            title={isPaused ? "Play" : "Pause"}
            onClick={handleToggleMobileCarrousel}
          >
            {isPaused ? <HiPlay size={28} /> : <HiPause size={28} />}
          </IconContainer>
        )}
        <ComponentItemCard
          {...currentCompany}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </CompanyContainer>
      <BulletsContainer>
        {companies.map((company, index) => (
          <Bullet
            onMouseEnter={handlePause}
            onMouseLeave={handlePlay}
            isActive={currentIndex.current === index}
            onClick={() => handleShowCompany(company, index)}
            key={company.id}
            title={`experience ${index + 1}`}
          />
        ))}
      </BulletsContainer>
    </Container>
  );
}
