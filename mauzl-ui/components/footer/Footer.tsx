import { services } from "@/common/contants";
import txKeys from "@/i18n/translations";
import { Divider, Stack } from "@mui/material";
import Link from "next/link";
import { WhatsApp, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { theme } from "@/styles/stylesheet";
import TextTypography from "../common/TextTypography";

const socialMediaList = [
  { Icon: Instagram, link: "https://www.instagram.com/" },
  { Icon: WhatsApp, link: "https://www.whatsapp.com/" },
  { Icon: Facebook, link: "https://www.facebook.com/" },
  { Icon: Twitter, link: "https://twitter.com/" },
];

const Footer = () => {
  return (
    <Stack p={10} bgcolor="#F8F8F8">
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        pb={6}
        gap={3}
      >
        <Stack direction="row" gap={6} alignItems="center" flexWrap="wrap">
          <Link href="/">
            <TextTypography
              text={txKeys.common.appName}
              variant="h6"
              color="primary"
              sx={{
                transition: "color 0.5s",
                "&:hover": { color: theme.typography.body1.color },
              }}
            />
          </Link>
          <Stack direction="row" flexWrap="wrap" gap={3}>
            {services.map(({ name, link }) => (
              <Link href={link} key={name}>
                <TextTypography
                  text={
                    txKeys.services[name as keyof typeof txKeys.services].title
                  }
                  color="primary"
                  sx={{
                    "&:hover": { color: theme.typography.body1.color },
                  }}
                />
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          {socialMediaList.map(({ Icon, link }) => (
            <Link href={`${link}`} key={link}>
              <Icon
                color="primary"
                sx={{
                  transition: "color 0.5s",
                  "&:hover": { color: theme.typography.body1.color },
                }}
              />
            </Link>
          ))}
        </Stack>
      </Stack>
      <Stack gap={1}>
        <TextTypography text={txKeys.footer.copyright} />
        <Divider sx={{ bgcolor: theme.palette.secondary.main }} />
      </Stack>
    </Stack>
  );
};

export default Footer;
