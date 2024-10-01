import txKeys from "@/i18n/translations";
import { theme } from "@/styles/stylesheet";
import Link from "next/link";
import TextTypography from "../common/TextTypography";

interface Props {
  service: { name: string; link: string };
}

const NavbarMenuItem = ({ service: { name, link } }: Props) => {
  const serviceTranslation =
    txKeys.services[name as keyof typeof txKeys.services].title;

  return (
    <Link href={link}>
      <TextTypography
        text={serviceTranslation}
        sx={{
          transition: "color 0.5s",
          "&:hover": { color: theme.palette.primary.main, cursor: "pointer" },
        }}
      />
    </Link>
  );
};

export default NavbarMenuItem;
