import type { IconType } from "react-icons";

export interface EducationProps {
  id: number;
  institution: string;
  course: string;
  description: string;
  link: string;
  image: string;
  startedAt: string;
  finishedAt: string;
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
export interface SocialMediaProps {
  id: number;
  name: string;
  link: string;
  icon: IconType;
}

export interface SocialMediaEntry {
  id: number;
  title: string;
  href: string;
  icon: string;
}
