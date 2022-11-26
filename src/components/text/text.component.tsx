import styles from "./text.styles";

import type { BodyProps, SubtitleProps, TitleProps } from "./text.types";

function Title({ component = "h1", ...props }: TitleProps) {
  const Component = styles[component];

  return <Component component={component} {...props} />;
}

function Body({ component = "p", ...props }: BodyProps) {
  const Component = styles[component];

  return <Component component={component} {...props} />;
}

function Subtitle({ component = "h4", ...props }: SubtitleProps) {
  const Component = styles[component];

  return <Component component={component} {...props} />;
}

const Text = {
  Title,
  Body,
  Subtitle,
};

export default Text;
