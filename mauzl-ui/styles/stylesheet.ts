import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const PlusJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSansFont.ttf",
    },
  ],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2EBB77",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#B479D9",
    },
  },
  typography: {
    fontFamily: PlusJakartaSans.style.fontFamily,
  },
});
