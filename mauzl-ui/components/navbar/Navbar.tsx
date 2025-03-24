"use client";

import React, { useState, useEffect } from "react";
import {
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  AppBar,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import { theme } from "@/styles/stylesheet";
import NavbarMenu from "./NavbarMenu";
import { FaBagShopping } from "react-icons/fa6";
import TextTypography from "../common/TextTypography";
import Sidebar from "./Sidebar";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";
import AccountMenu from "./AccountMenu";
import { useUsersControllerFindMe } from "@/generated/hooks";
import PrimaryButton from "../common/PrimaryButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const me = useUsersControllerFindMe({
    query: {
      retry: 0,
    },
  });

  const { push } = useRouter();

  const orderItems = useLiveQuery(() => db.products.toArray()) || [];

  const [elevate, setElevate] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return matches ? (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          borderBottom: elevate ? "3px solid #B479D9" : "none",
          transition: "box-shadow 0.3s, border-bottom 0.3s",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          bgcolor="#efeff0"
          p={0.7}
        >
          <TextTypography
            text="Help and contact"
            variant="body2"
            fontWeight="bold"
          />
          <TextTypography
            text="Free standard delivery over 599 MAD"
            variant="body2"
            fontWeight="bold"
          />
          <TextTypography
            text="30-day return policy"
            variant="body2"
            fontWeight="bold"
          />
        </Stack>
        <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={1}
          >
            <Stack mx={3}>
              <Link href="/">
                <TextTypography text="MAUZL" variant="body1" />
              </Link>
            </Stack>
            {!searchFocused && <NavbarMenu />}

            <Stack direction="row" alignItems="center" justifyContent="center">
              <Stack width={searchFocused ? "500px" : "250px"}>
                <TextField
                  value={""}
                  onChange={() => undefined}
                  onKeyDown={() => undefined}
                  placeholder={"Search.."}
                  fullWidth
                  size="small"
                  color="info"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <IconButton href="/bag" size="large" aria-haspopup="true">
                <Badge
                  variant={orderItems?.length > 0 ? "dot" : "standard"}
                  color="primary"
                >
                  <FaBagShopping
                    color={theme.palette.primary.main}
                    size="18"
                    stroke="1.5"
                  />
                </Badge>
              </IconButton>

              <LanguageSelect />
              {me.isLoading ? null : me.data ? (
                <AccountMenu user={me.data} />
              ) : (
                <PrimaryButton text="Sign in" onClick={() => push("/signin")} />
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  ) : (
    <Sidebar />
  );
};

export default Navbar;
