import type { IconType } from "react-icons";

export interface Education {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  institution: string;
  institutionUrl: string;
}

export interface HighlightCompanyProps {
  title: string;
  icon: IconType;
}

export interface CompanyProps {
  id: number;
  name: string;
  role: string;
  description: string;
  period: string;
  link: string;
  image: string;
  isCurrentJob: boolean;
  highlights: HighlightCompanyProps[];
}
