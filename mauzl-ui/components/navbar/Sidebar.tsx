import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MauzlIcon from "../../public/svgs/Mauzl.svg";
import { services } from "@/common/contants";
import txKeys from "@/i18n/translations";
import { theme } from "@/styles/stylesheet";
import { useUsersControllerFindMe } from "@/generated/hooks";
import PrimaryButton from "../common/PrimaryButton";
import AccountMenu from "./AccountMenu";

export default function Sidebar() {
  const { push } = useRouter();

  const me = useUsersControllerFindMe({
    query: {
      retry: 0,
    },
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation" onClick={toggleDrawer(false)}>
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
        <MenuItem
          key={"Settings"}
          style={{ paddingLeft: 25 }}
          onClick={() => push("/settings")}
        >
          <TextTypography
            text={"Settings"}
            sx={{
              transition: "color 0.5s",
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          />
        </MenuItem>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ my: 1 }}>
        <MenuIcon fontSize="medium" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Stack direction="column" gap={2} height={"100%"}>
          <Stack direction="row" justifyContent="space-between">
            <Box alignSelf="flex-start">
              <Button onClick={toggleDrawer(false)} sx={{ my: 1 }}>
                <MenuIcon fontSize="medium" />
              </Button>
            </Box>

            <Box mx={2}>
              <Link href="/">
                <Image
                  alt="models"
                  src={MauzlIcon}
                  height={0}
                  width={0}
                  style={{
                    minWidth: "50px",
                    minHeight: "50px",
                    width: "50px",
                  }}
                />
              </Link>
            </Box>
            <Box p={0.7}>
              {!me.isLoading && me.data ? (
                <AccountMenu user={me.data} />
              ) : (
                <PrimaryButton text="Login" href="/api/auth/google/callback" />
              )}
            </Box>
          </Stack>
          <Stack>{DrawerList}</Stack>
        </Stack>
      </Drawer>
    </div>
  );
}
