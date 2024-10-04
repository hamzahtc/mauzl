import type EnJson from "./locales/en.json";

export enum Language {
  FR = "fr",
  EN = "en",
}

export type TranslationJsonType = typeof EnJson;

//// i18n props types
export interface TranslationOption {
  nameSpace?: string;
  useSuspense?: boolean;
  keyPrefix?: string;
}

export interface InterpolationOptions {
  formatSeparator?: string;
  escape?: (str: string) => string;
  alwaysFormat?: boolean;
  escapeValue?: boolean;
  prefix?: string;
  suffix?: string;
  defaultVariables?: Record<string, never>;
  maxReplaces?: number;
  skipOnVariables?: boolean;
}

export type TFunction = (key: string, options?: InterpolationOptions) => string;
