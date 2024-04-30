import { createContext } from "react";

import { Languages } from "config/constants";
import { strings } from "config/locales";

export interface AppProviderProperties {
  language: Languages;
  strings: (typeof strings)[Languages.EN];
}

export interface AppContextSchema extends AppProviderProperties {
  setAttribute(key: keyof AppProviderProperties, value: any): void;
  onToggleLanguage: () => void;
}

export const AppContext = createContext<AppContextSchema>(
  {} as AppContextSchema
);
