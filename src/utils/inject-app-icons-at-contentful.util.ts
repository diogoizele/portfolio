import { EntryCollection } from "contentful";
import { IconType } from "react-icons";
import { appIcons } from "utils";

interface OptionsProps {
  method?: "hightlight";
}

export function injectAppIconsAtContentful<T>(
  entry: EntryCollection<T>,
  options?: OptionsProps
): EntryCollection<T> {
  const { items } = entry;

  if (!items.length) return entry;

  switch (options?.method) {
    case "hightlight": {
      const newItems = items.reduce((newList, item) => {
        const { fields } = item as any;
        const { highlights } = fields;

        const newFields = {
          ...fields,
          highlights: highlights.map((highlight) => {
            const { icon } = highlight;

            return {
              ...highlight,
              icon: appIcons[icon] as IconType,
            };
          }),
        };

        return [...newList, { ...item, fields: newFields }];
      }, []);

      return { ...entry, items: newItems };
    }
    default: {
      const newItems = items.reduce((newList, item) => {
        const { fields } = item as any;

        const newFields = {
          ...fields,
          icon: appIcons[fields.icon] as IconType,
        };

        return [...newList, { ...item, fields: newFields }];
      }, []);

      return { ...entry, items: newItems };
    }
  }
}
