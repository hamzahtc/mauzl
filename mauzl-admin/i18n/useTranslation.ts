import type { TFunction, TranslationOption } from "./types";

/* eslint-disable-next-line no-restricted-imports */
import { useTranslation as _useTranslation } from "react-i18next";

export function useTranslation(options?: TranslationOption): TFunction {
  const { t: _translate } = _useTranslation(
    options?.nameSpace ?? "translation",
    {
      useSuspense: options?.useSuspense ?? false,
      keyPrefix: options?.keyPrefix,
    }
  );
  return (key, iOptions) => _translate(key, iOptions as string);
}
