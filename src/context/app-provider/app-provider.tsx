import { useCallback, useEffect, useMemo, useReducer } from "react";

import { Languages, StorageKeys } from "config/constants";
import { strings } from "config/locales";

import {
  AppContext,
  AppContextSchema,
  AppProviderProperties,
} from "./app-context";

interface AppProviderProps {
  children: React.ReactNode;
}

const initialState: AppProviderProperties = {
  language: Languages.EN,
  strings: strings[Languages.EN],
};

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(
    (state: AppProviderProperties, action: Partial<AppProviderProperties>) => ({
      ...state,
      ...action,
    }),
    initialState
  );

  const setAttribute = useCallback(
    (key: keyof AppProviderProperties, value: any) => {
      dispatch({ [key]: value });
    },
    []
  );

  const onToggleLanguage = useCallback(() => {
    const newValue =
      state.language === Languages.EN ? Languages.PT : Languages.EN;

    localStorage.setItem(StorageKeys.LANGUAGE, JSON.stringify(newValue));

    setAttribute("language", newValue);
  }, [state.language, setAttribute]);

  const context: AppContextSchema = useMemo(
    () => ({
      ...state,
      setAttribute,
      onToggleLanguage,
    }),
    [state, setAttribute, onToggleLanguage]
  );

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem(StorageKeys.LANGUAGE));

    if (language) {
      setAttribute("language", language);
    }
  }, []);

  useEffect(() => {
    setAttribute("strings", strings[state.language]);
  }, [state.language, setAttribute]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
