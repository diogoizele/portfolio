import { IconType } from "react-icons";
import { appIcons } from "utils";

interface OptionsProps {
  method?: "hightlight";
}

export function injectAppIconsAtContentful(
  entry: any[],
  options?: OptionsProps
) {
  switch (options?.method) {
    case "hightlight":
      return entry.map(({ highlights, ...rest }) => ({
        ...rest,
        highlights: highlights.map(({ icon, ...rest }) => ({
          ...rest,
          icon: appIcons[icon] as IconType,
        })),
      }));
    default: {
      return entry.map(({ icon, ...rest }) => ({
        ...rest,
        icon: appIcons[icon] as IconType,
      }));
    }
  }
}
