import * as React from "react";

import i18n from "./i18n";

import { I18nextProvider } from "react-i18next";

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
