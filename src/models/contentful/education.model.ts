import { EntryCollection } from "contentful";

import type { EducationProps } from "types";

export function educationModel(
  educationEntry: EntryCollection<EducationProps>
) {
  const { items } = educationEntry;

  if (!items.length) return educationEntry;

  const newItems = items.reduce((newList, item) => {
    const { fields } = item as any;
    const { image, institutionLink, courseName } = fields;

    const newFields = {
      ...fields,
      image: `https:${image?.fields?.file?.url}`,
      link: institutionLink,
      course: courseName,
    };

    return [...newList, { ...item, fields: newFields }];
  }, []);

  return { ...educationEntry, items: newItems };
}
