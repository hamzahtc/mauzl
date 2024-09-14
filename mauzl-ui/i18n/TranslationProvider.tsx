import * as React from "react";

import i18n from "./i18n";

/* eslint-disable-next-line no-restricted-imports */
import { I18nextProvider } from "react-i18next";

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
