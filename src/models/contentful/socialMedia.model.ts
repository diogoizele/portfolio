import { IconType } from "react-icons";
import { EntryCollection } from "contentful";

import { SocialMediaEntry, SocialMediaProps } from "types";

export function SocialMediaModel(entry: EntryCollection<SocialMediaEntry>) {
  const { items } = entry;

  if (!items.length) return entry;

  const newItems = items.reduce((newList, item) => {
    const { fields } = item;
    const { icon, href, id, title } = fields;

    const newFields: SocialMediaProps = {
      id,
      link: href,
      name: title,
      icon: icon as unknown as IconType,
    };

    return [...newList, { ...item, fields: newFields }];
  }, []);

  const sortedItems = newItems.sort((a, b) => a.fields.id - b.fields.id);

  return { ...entry, items: sortedItems };
}
