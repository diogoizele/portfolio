import { MouseEvent, useEffect, useRef, useState } from "react";

import { ComponentItemCard } from "components";
import { useWindow } from "hooks";

import { CompanyContainer, Container, Line } from "./companies.styles";

import type { CompanyProps } from "types";

interface Props {
  companies: CompanyProps[];
}

export function Companies({ companies }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);

  const { width } = useWindow();

  const [position, setPosition] = useState(0);
  const [showTrail, setShowTrail] = useState(false);
  const [trailWidth, setTrailWidth] = useState(0);
  const [canExecute, setCanExecute] = useState(true);
  const [highlighted, setHighlighted] = useState(companies.length - 1);

  // const isMobileView = width && width <= 590;

  const sortByCompanyId = (type?: "desc" | "asc") => {
    if (type === "desc") return companies.sort((a, b) => b.id - a.id);
    return companies.sort((a, b) => a.id - b.id);
  };

  const showTrailOnMouseMove = (e: MouseEvent) => {
    const { type } = e;

    if (type === "mouseenter") {
      setShowTrail(true);
    } else {
      setHighlighted(companies.length - 1);
      setShowTrail(false);
    }
  };

  const showTrailCurrentPosition = (e: MouseEvent) => {
    if (!canExecute) return;
    setCanExecute(false);

    const { clientX } = e;
    const { offsetWidth } = lineRef.current;
    const rawMousePosition = clientX - (width - offsetWidth) / 2;
    let mousePosition = rawMousePosition;

    if (rawMousePosition < 0) {
      mousePosition = 0;
    } else if (rawMousePosition > offsetWidth) {
      mousePosition = offsetWidth;
    }

    const value = Math.floor(mousePosition / trailWidth);
    setHighlighted(value);

    setPosition(trailWidth * value);

    setTimeout(() => {
      setCanExecute(true);
    }, 200);
  };

  useEffect(() => {
    if (lineRef.current) {
      const { offsetWidth } = lineRef.current;
      const sectionWidth = offsetWidth / companies.length;
      setTrailWidth(sectionWidth);
    }
  }, [lineRef]);

  return (
    <Container>
      <CompanyContainer
        onMouseEnter={showTrailOnMouseMove}
        onMouseLeave={showTrailOnMouseMove}
        onMouseMoveCapture={showTrailCurrentPosition}
      >
        {sortByCompanyId("desc").map((company, index) => (
          <ComponentItemCard
            company={company}
            currentJob={index === companies.length - 1}
            highlighted={
              index === highlighted && index === companies.length - 1
            }
            key={company.id}
          />
        ))}
        <Line
          ref={lineRef}
          position={position}
          isShowing={showTrail}
          width={trailWidth}
        />
      </CompanyContainer>
    </Container>
  );
}
