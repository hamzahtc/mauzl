"use client";
import Header from "@/components/header/Header";
import SidebarItems from "@/components/sidebar/SidebarItems";
import { baselightTheme } from "@/styles/DefaultColors";
import {
  styled,
  Container,
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import React from "react";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />
          <MainWrapper className="mainwrapper">
            <SidebarItems />
            <PageWrapper className="page-wrapper">
              <Header />
              <Container
                sx={{
                  paddingTop: "20px",
                  maxWidth: "1200px",
                }}
              >
                <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
              </Container>
            </PageWrapper>
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
