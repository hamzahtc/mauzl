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
      main: "#B479D9",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#2EBB77",
    },
  },
  typography: {
    fontFamily: PlusJakartaSans.style.fontFamily,
  },
});
