import { EntryCollection } from "contentful";

import type { EducationEntry, EducationProps } from "types";

export function educationModel({
  items,
}: EntryCollection<EducationEntry>): EducationProps[] {
  const mappedItems = items
    .map(({ fields }) => fields)
    .map(({ image, courseName, institutionLink, ...rest }) => ({
      ...rest,
      image: `https:${image?.fields?.file?.url}`,
      course: courseName,
      link: institutionLink,
    }));

  return mappedItems;
}
