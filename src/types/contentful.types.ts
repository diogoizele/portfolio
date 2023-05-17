import type { IconType } from "react-icons";

interface ContentfulImageProps {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}
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

export interface EducationEntry {
  id: number;
  institution: string;
  courseName: string;
  description: string;
  institutionLink: string;
  image: ContentfulImageProps;
  startedAt: string;
  finishedAt: string;
}

export interface HighlightCompanyProps {
  title: string;
  icon: string;
}

export interface CompanyEntry {
  id: number;
  name: string;
  role: string;
  description: string;
  period: string;
  webSite: string;
  image: ContentfulImageProps;
  isCurrentJob: boolean;
  highlights: HighlightCompanyProps[];
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
  icon: string;
}

export interface SocialMediaEntry {
  id: number;
  title: string;
  href: string;
  icon: string;
}
