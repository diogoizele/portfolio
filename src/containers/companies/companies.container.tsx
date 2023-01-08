import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";

import { ComponentItemCard } from "components";
import { COMPANIES } from "utils/static";

import {
  Bullet,
  BulletsContainer,
  CompanyContainer,
  Container,
  IconContainer,
} from "./companies.styles";

import type { CompanyProps } from "components/company-item-card/component-item-card.component";
import { useWindow } from "hooks";
import { useTheme } from "styled-components";

export function Companies() {
  const currentIndex = useRef(0);

  const { width } = useWindow();

  const [currentCompany, setCurrentCompany] = useState<CompanyProps>(
    COMPANIES[currentIndex.current]
  );
  const [isPaused, setIsPaused] = useState(false);

  const isMobileView = width && width <= 590;

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

  useEffect(() => {
    const miliseconds = isMobileView ? 10 : 5;

    function moveCarrousel() {
      const nextIndex = currentIndex.current + 1;
      const nextCompany = COMPANIES[nextIndex];

      if (nextCompany) {
        handleShowCompany(nextCompany, nextIndex);
      } else {
        handleShowCompany(COMPANIES[0], 0);
      }
    }

    if ((isMobileView && !isPaused) || (!isMobileView && !isPaused)) {
      const interval = setInterval(moveCarrousel, miliseconds * 1000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobileView, isPaused]);

  useEffect(() => {
    if (!isMobileView) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
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
            {isPaused ? <HiPause size={28} /> : <HiPlay size={28} />}
          </IconContainer>
        )}
        <ComponentItemCard
          {...currentCompany}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </CompanyContainer>
      <BulletsContainer>
        {COMPANIES.map((company, index) => (
          <Bullet
            isActive={currentIndex.current === index}
            onClick={() => handleShowCompany(company, index)}
            key={company.id}
          />
        ))}
      </BulletsContainer>
    </Container>
  );
}
