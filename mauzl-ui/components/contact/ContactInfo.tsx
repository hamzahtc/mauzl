import * as React from "react";
import { Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import { theme } from "@/styles/stylesheet";
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  Phone,
  Email,
  Place,
} from "@mui/icons-material";
import Link from "next/link";

const socialMediaList = [
  { Icon: Instagram, link: "https://www.instagram.com/" },
  { Icon: WhatsApp, link: "https://www.whatsapp.com/" },
  { Icon: Facebook, link: "https://www.facebook.com/" },
  { Icon: Twitter, link: "https://twitter.com/" },
];

const ContactInfo: React.FC = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      gap={4}
      height="100%"
      sx={{ bgcolor: "#f9f9fb" }}
      p={2}
    >
      <Stack gap={2}>
        <Stack gap={2}>
          <TextTypography text="Contact Informations" variant="h5" />
          <TextTypography
            text="Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly."
            variant="body1"
          />
        </Stack>
      </Stack>
      <Stack>
        <Stack gap={1} py={2}>
          <Stack direction="row" gap={2}>
            <Phone
              sx={{
                transition: "color 0.5s",
                "&:hover": { color: theme.typography.body1.color },
                fontSize: "1.5rem",
              }}
            />
            <TextTypography
              text="+212 500440444"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <Email
              sx={{
                transition: "color 0.5s",
                "&:hover": { color: theme.typography.body1.color },
                fontSize: "1.5rem",
              }}
            />
            <TextTypography
              text="mauzlshop@gmail.com"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <Place
              sx={{
                transition: "color 0.5s",
                "&:hover": { color: theme.typography.body1.color },
                fontSize: "1.5rem",
              }}
            />
            <TextTypography
              text="132 Dartmouth Street Boston, Massachusetts 02156 United States"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
        </Stack>
        <Stack direction="row" gap={2} alignSelf="end">
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
    </Stack>
  );
};

export default ContactInfo;
