import { EntryCollection } from "contentful";
import { appIcons } from "utils";

export function injectAppIconsAtContentful<T>(
  entry: EntryCollection<T>
): EntryCollection<T> {
  const { items } = entry;

  if (!items.length) return entry;

  const newItems = items.reduce((newList, item) => {
    const { fields } = item as any;
    const { highlights } = fields;

    const newFields = {
      ...fields,
      highlights: highlights.map((highlight) => {
        const { icon } = highlight;

        return {
          ...highlight,
          icon: appIcons[icon],
        };
      }),
    };

    return [...newList, { ...item, fields: newFields }];
  }, []);

  return { ...entry, items: newItems };
}
