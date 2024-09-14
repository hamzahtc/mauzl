import { services } from "@/common/contants";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { WhatsApp, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { theme } from "@/styles/stylesheet";

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
            <Typography
              variant="h6"
              component="div"
              color="primary"
              sx={{
                transition: "color 0.5s",
                "&:hover": { color: "black" },
              }}
            >
              <TranslateMessage txKey={txKeys.common.appName} />
            </Typography>
          </Link>
          <Stack direction="row" flexWrap="wrap" gap={3}>
            {services.map((service) => (
              <Link href={`${service}`} key={service}>
                <Typography
                  component="div"
                  color="primary"
                  sx={{
                    "&:hover": { color: "black" },
                  }}
                >
                  <TranslateMessage
                    txKey={
                      txKeys.services[service as keyof typeof txKeys.services]
                        .title
                    }
                  />
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          {socialMediaList.map(({ Icon, link }) => (
            <Link href={`${link}`} key={link}>
              <Icon
                sx={{
                  color: "black",
                  transition: "color 0.5s",
                  "&:hover": { color: "theme.palette.primary.main" },
                }}
              />
            </Link>
          ))}
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography component="div" sx={{ color: "black" }}>
          <TranslateMessage txKey={txKeys.footer.copyright} />
        </Typography>
        <Divider sx={{ bgcolor: theme.palette.secondary.main }} />
      </Stack>
    </Stack>
  );
};

export default Footer;
