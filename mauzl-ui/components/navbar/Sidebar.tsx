"use client";

import Link from "next/link";
import React from "react";
import { Sidebar as SidebarPro, Menu, MenuItem } from "react-pro-sidebar";
import TextTypography from "../common/TextTypography";
import txKeys from "@/i18n/translations";
import { theme } from "@/styles/stylesheet";
import { Stack } from "@mui/material";
import { services } from "@/common/contants";
import { useRouter } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import LanguageSelect from "./LanguageSelect";
import Image from "next/image";
import MauzlIcon from "../../public/svgs/Mauzl.svg";

const sidebarStyle = {
  width: "100%",
  backgroundColor: "#f8f9fa",
};

const Sidebar = () => {
  const { push } = useRouter();
  return (
    <SidebarPro style={sidebarStyle}>
      <Menu>
        <Stack
          py={2}
          pl={3}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Link href="/">
            <Image
              alt="models"
              src={MauzlIcon}
              width={0}
              height={0}
              style={{
                width: "50px",
              }}
            />
          </Link>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Link href="/bag">
              <FaBagShopping color="#B479D9" />
            </Link>
            <LanguageSelect />
          </Stack>
        </Stack>
        <Stack>
          {services.map(({ name, link }) => {
            return (
              <MenuItem
                key={name}
                style={{ paddingLeft: 25 }}
                onClick={() => push(link)}
              >
                <TextTypography
                  text={
                    txKeys.services[name as keyof typeof txKeys.services].title
                  }
                  sx={{
                    transition: "color 0.5s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                    },
                  }}
                />
              </MenuItem>
            );
          })}
        </Stack>
      </Menu>
    </SidebarPro>
  );
};

export default Sidebar;
