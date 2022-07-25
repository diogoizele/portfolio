import type { ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
  id: string

  title?: string;
  to?: string;
};
