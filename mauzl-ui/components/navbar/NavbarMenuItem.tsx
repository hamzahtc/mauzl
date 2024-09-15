import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { theme } from "@/styles/stylesheet";
import { Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  service: { name: string; link: string };
}

const NavbarMenuItem = ({ service: { name, link } }: Props) => {
  const serviceTranslation =
    txKeys.services[name as keyof typeof txKeys.services].title;

  return (
    <Link href={link}>
      <Typography
        component="div"
        color="black"
        sx={{
          transition: "color 0.5s",
          "&:hover": { color: theme.palette.primary.main, cursor: "pointer" },
        }}
      >
        <TranslateMessage txKey={serviceTranslation} />
      </Typography>
    </Link>
  );
};

export default NavbarMenuItem;
