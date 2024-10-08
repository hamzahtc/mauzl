import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const PlusJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSansFont.ttf",
    },
  ],
});

export const HelveticaNow = localFont({
  src: [
    {
      path: "../public/fonts/helveticanowtext-bold-demo.ttf",
    },
  ],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#B479D9",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#f5c06a",
    },
  },
  typography: {
    fontFamily: PlusJakartaSans.style.fontFamily,
    h1: {
      color: "#14141f",
    },
    h2: {
      color: "#14141f",
    },
    h3: {
      color: "#14141f",
    },
    h4: {
      color: "#14141f",
    },
    h5: {
      color: "#14141f",
    },
    h6: {
      color: "#14141f",
    },
    body1: {
      color: "#40404f",
    },
    body2: {
      color: "#545464",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
