import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { theme } from "@/styles/stylesheet";
import { Typography } from "@mui/material";

interface Props {
  service: string;
}

const NavbarMenuItem = ({ service }: Props) => {
  const serviceTranslation =
    txKeys.services[service as keyof typeof txKeys.services].title;

  return (
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
  );
};

export default NavbarMenuItem;
