import { useCallback, useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import { EntryCollection } from "contentful";

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
  companies: EntryCollection<CompanyProps>;
}

export function Companies({ companies }: Props) {
  const currentIndex = useRef(0);
  const formattedCompanies = companies.items.map(({ fields }) => fields);

  const { width } = useWindow();

  const [currentCompany, setCurrentCompany] = useState<CompanyProps>(
    formattedCompanies[currentIndex.current]
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
    const nextCompany = formattedCompanies[nextIndex];

    if (nextCompany) {
      handleShowCompany(nextCompany, nextIndex);
    } else {
      handleShowCompany(formattedCompanies[0], 0);
    }
  }, [currentIndex]);

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
        {formattedCompanies.map((company, index) => (
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
