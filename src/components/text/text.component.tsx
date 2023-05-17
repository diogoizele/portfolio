import { useMemo } from "react";
import { useTheme } from "styled-components";
import { CustomThemeType } from "../../styles/theme.types";

import styles from "./text.styles";

import type { BodyProps, SubtitleProps, TitleProps } from "./text.types";

interface ComponentBodyProps extends BodyProps {
  color?: ((theme: CustomThemeType) => string) | string;
}

interface ComponentTitleProps extends TitleProps {
  color?: ((theme: CustomThemeType) => string) | string;
}

interface ComponentSubtitleProps extends SubtitleProps {
  color?: ((theme: CustomThemeType) => string) | string;
}

function Title({ component = "h1", color, ...props }: ComponentTitleProps) {
  const theme = useTheme();

  const Component = styles[component];

  const textColor = useMemo(() => {
    if (typeof color === "string") {
      return color;
    }

    if (typeof color === "function") {
      return color(theme);
    }
  }, [color, theme]);

  return <Component component={component} color={textColor} {...props} />;
}

function Body({ component = "p", color, ...props }: ComponentBodyProps) {
  const theme = useTheme();

  const Component = styles[component];

  const textColor = useMemo(() => {
    if (typeof color === "string") {
      return color;
    }

    if (typeof color === "function") {
      return color(theme);
    }
  }, [color, theme]);

  return <Component component={component} color={textColor} {...props} />;
}

function Subtitle({
  component = "h4",
  color,
  ...props
}: ComponentSubtitleProps) {
  const theme = useTheme();

  const Component = styles[component];

  const textColor = useMemo(() => {
    if (typeof color === "string") {
      return color;
    }

    if (typeof color === "function") {
      return color(theme);
    }
  }, [color, theme]);

  return <Component component={component} color={textColor} {...props} />;
}

const Text = {
  Title,
  Body,
  Subtitle,
};

export default Text;
