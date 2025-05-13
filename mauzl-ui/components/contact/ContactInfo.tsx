import * as React from "react";
import { Box, Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import Image from "next/image";

// const socialMediaList = [
//   { Icon: Instagram, link: "https://www.instagram.com/" },
//   { Icon: WhatsApp, link: "https://www.whatsapp.com/" },
//   { Icon: Facebook, link: "https://www.facebook.com/" },
//   { Icon: Twitter, link: "https://twitter.com/" },
// ];

const ContactInfo: React.FC = () => {
  return (
    <Stack direction="column" height="100%" sx={{ bgcolor: "#f9f9fb" }}>
      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="stretch" // key: stretch children to equal height
          flexWrap="wrap"
          gap={4}
          sx={{ height: 300 }} // or any fixed height you want
        >
          <Box sx={{ flex: 1, position: "relative" }}>
            <Image
              alt="bags"
              src="/images/contact.jpg"
              fill
              style={{
                objectFit: "cover",
              }}
            />
            <Box
              bottom={{ xs: "20%", sm: "30%", md: "40%" }}
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Stack gap={2}>
                <TextTypography
                  width="100%"
                  text="Need to get in touch?"
                  fontSize={40}
                  color="white"
                />
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
      {/* <Stack>
        <Stack gap={1} p={2} direction="row" alignItems="start" width="100%">
          <Stack direction="row" gap={2}>
            <TextTypography
              text="+212 500440444"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <TextTypography
              text="mauzlshop@gmail.com"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
          <Stack direction="row" gap={2}>
            <TextTypography
              text="Essaouira, Morocco"
              fontWeight="bold"
              fontSize="0.8rem"
            />
          </Stack>
        </Stack>
        <Stack direction="row" gap={2} p={2} alignSelf="end">
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
      </Stack> */}
    </Stack>
  );
};

export default ContactInfo;
