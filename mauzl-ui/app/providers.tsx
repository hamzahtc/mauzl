"use client";

import { TranslationProvider } from "@/i18n/TranslationProvider";
import { theme } from "@/styles/stylesheet";
import { ThemeProvider } from "@mui/material";
import React from "react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <TranslationProvider>{children}</TranslationProvider>
    </ThemeProvider>
  );
};
