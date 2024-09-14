import { Box, Stack, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import LanguageSelect from "./LanguageSelect";
import { theme } from "@/styles/stylesheet";
import NavbarMenu from "./NavbarMenu";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack>
              <Link href="/">
                <Typography
                  variant="h6"
                  component="div"
                  color="black"
                  sx={{
                    transition: "color 0.5s",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
                  <TranslateMessage txKey={txKeys.common.appName} />
                </Typography>
              </Link>
            </Stack>
            <NavbarMenu />
            <Stack direction="row" alignItems="center">
              <Button
                text={txKeys.signup.title}
                sx={{ backgroundColor: "black" }}
              />
              <LanguageSelect />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
