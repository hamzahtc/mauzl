"use client";

import { TranslationProvider } from "@/i18n/TranslationProvider";
import { theme } from "@/styles/stylesheet";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import ToastProvider from "./ToastProvider";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <TranslationProvider>
        <ReactQueryClientProvider>
          <ToastProvider>{children}</ToastProvider>
        </ReactQueryClientProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
};
