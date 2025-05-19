"use client";

import React, { useState, useEffect, Suspense } from "react";
import {
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  AppBar,
} from "@mui/material";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import { theme } from "@/styles/stylesheet";
import NavbarMenu from "./NavbarMenu";
import { FaBagShopping, FaHeart } from "react-icons/fa6";
import TextTypography from "../common/TextTypography";
import Sidebar from "./Sidebar";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";
import AccountMenu from "./AccountMenu";
import {
  useUsersControllerFindMe,
  useWishListsControllerFindOne,
} from "@/generated/hooks";
import PrimaryButton from "../common/PrimaryButton";
import { useRouter } from "next/navigation";
import SearchInput from "../filter/SearchInput";

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
  const wishlist = useWishListsControllerFindOne();
  const products = wishlist?.data?.products;

  const orderItems = useLiveQuery(() => db.products.toArray()) || [];
  const wishlistProducts = useLiveQuery(() => db.wishlist.toArray());

  const [elevate, setElevate] = useState(false);
  const [searchFocused] = useState(false);

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
    <Suspense fallback={null}>
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

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <Stack width={searchFocused ? "500px" : "250px"}>
                  <SearchInput />
                </Stack>
                <Stack direction="row" gap={1} ml={2}>
                  <Stack direction="row">
                    <IconButton
                      onClick={() => push("/wishlist")}
                      size="large"
                      aria-haspopup="true"
                    >
                      <Badge
                        badgeContent={
                          me.data ? products?.length : wishlistProducts?.length
                        }
                        color="info"
                      >
                        <FaHeart
                          color={theme.palette.grey[900]}
                          size="20"
                          stroke="1.5"
                        />
                      </Badge>
                    </IconButton>
                    <IconButton
                      onClick={() => push("/bag")}
                      size="large"
                      aria-haspopup="true"
                    >
                      <Badge badgeContent={orderItems.length} color="info">
                        <FaBagShopping
                          color={theme.palette.grey[900]}
                          size="20"
                          stroke="1.5"
                        />
                      </Badge>
                    </IconButton>
                  </Stack>

                  <LanguageSelect />
                </Stack>
                {me.isLoading ? null : me.data ? (
                  <AccountMenu user={me.data} />
                ) : (
                  <PrimaryButton
                    text="Sign in"
                    onClick={() => push("/signin")}
                    color="info"
                  />
                )}
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Suspense>
  ) : (
    <Sidebar />
  );
};

export default Navbar;
