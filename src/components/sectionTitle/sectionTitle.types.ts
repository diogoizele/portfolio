import type { ReactNode } from "react";

export type SectionTitleComponents = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type SectionTitleProps = {
  children: ReactNode;
  component?: SectionTitleComponents;

  hasBefore?: boolean;
  "data-aos"?: string;
  "data-aos-offset"?: string;
  "data-aos-duration"?: string;
  "data-aos-mirror"?: string;
};
