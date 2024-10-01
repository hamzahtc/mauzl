import { Box, Stack, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import txKeys from "@/i18n/translations";
import LanguageSelect from "./LanguageSelect";
import { theme } from "@/styles/stylesheet";
import NavbarMenu from "./NavbarMenu";
import { FaBagShopping } from "react-icons/fa6";
import TextTypography from "../common/TextTypography";

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
                <TextTypography
                  text={txKeys.common.appName}
                  variant="h6"
                  sx={{
                    transition: "color 0.5s",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                />
              </Link>
            </Stack>
            <NavbarMenu />
            <Stack direction="row" alignItems="center" justifyContent="center">
              {/* <Button
                text={txKeys.signup.title}
                sx={{ backgroundColor: "black" }}
              /> */}
              <Link href="/bag">
                <FaBagShopping color="#B479D9" />
              </Link>
              <LanguageSelect />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
