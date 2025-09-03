import { RefObject, useCallback, useEffect, useState } from "react";

const MULTIPLIER = 6; // in rem

export const useScrollAnimation = (elementRef: RefObject<HTMLElement>) => {
  const [lineWidth, setLineWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const rect = elementRef.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcula a posição do elemento no viewport (0% = topo, 100% = bottom)
    // Usando o centro do elemento como referência
    const elementCenter = rect.top + rect.height / 2;
    const viewportPosition = (elementCenter / windowHeight) * 100;

    // Calcula a largura da linha baseada na posição no viewport‰
    let width = 0;

    if (viewportPosition <= 15) {
      width = 0;
    } else if (viewportPosition <= 20) {
      const progress = (viewportPosition - 10) / 10;
      width = progress * MULTIPLIER;
    } else if (viewportPosition <= 80) {
      width = MULTIPLIER;
    } else if (viewportPosition <= 90) {
      const progress = (90 - viewportPosition) / 10;
      width = progress * MULTIPLIER;
    } else {
      width = 0;
    }

    setLineWidth(Math.max(0, Math.min(6, width)));
  }, [elementRef]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Adiciona o listener de scroll com throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [elementRef, handleScroll]);

  return lineWidth;
};
