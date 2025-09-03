import { PropsWithChildren, useRef } from "react";
import { useTheme } from "styled-components";

import { useScrollAnimation } from "../../hooks";
import { Title } from "./animated-title.styles";

type AnimatedTitleProps = PropsWithChildren & {
  id: string;
};

export const AnimatedTitle = ({ children, id }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineWidth = useScrollAnimation(titleRef);
  const theme = useTheme();

  return (
    <Title id={id} ref={titleRef} lineWidth={lineWidth} theme={theme}>
      {children}
    </Title>
  );
};
