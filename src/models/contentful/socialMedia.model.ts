import { EntryCollection } from "contentful";

import { SocialMediaEntry, SocialMediaProps } from "types";

export function SocialMediaModel({
  items,
}: EntryCollection<SocialMediaEntry>): SocialMediaProps[] {
  const mappedItems = items
    .map(({ fields }) => fields)
    .map(({ href, title, ...rest }) => ({
      ...rest,
      link: href,
      name: title,
    }))
    .sort((a, b) => a.id - b.id);

  return mappedItems;
}
