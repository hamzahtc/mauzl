"use client";

import Button from "@/components/common/Button";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { useTranslation } from "@/i18n/useTranslation";
import { theme } from "@/styles/stylesheet";
import { Box, Chip, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import Cards from "@/components/product/Cards";

export default function Home() {
  const translate = useTranslation();

  return (
    <Stack direction="column" gap={10} px={30} py={10}>
      <Stack direction="row" gap={6} flexWrap="wrap">
        <Stack flex={1} gap={4} justifyContent="center">
          <Box>
            <Chip
              label={translate(txKeys.services.home.createYourOwn)}
              sx={{
                color: theme.palette.info.main,
                fontWeight: "bold",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h3"
              textTransform="uppercase"
              fontWeight="bold"
              component="div"
              color="black"
            >
              <TranslateMessage txKey={txKeys.services.home.quote} />
            </Typography>
          </Box>
          <Box>
            <Typography component="div" color="grey">
              <TranslateMessage txKey={txKeys.services.home.description} />
            </Typography>
          </Box>
          <Box>
            <Button
              text={txKeys.common.shopNow}
              size="large"
              endIcon={<EastIcon sx={{ color: "white" }} />}
              sx={{ backgroundColor: theme.palette.primary.main }}
            />
          </Box>
        </Stack>
        <Stack flex={1} alignItems="end">
          <Image
            alt="models"
            src="/images/models.png"
            priority={true}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "500px",
              minWidth: "350px",
              height: "auto",
              borderRadius: 8,
            }}
          />
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="center" gap={4}>
        <Box>
          <Typography
            variant="h3"
            component="div"
            fontWeight="bold"
            color="black"
          >
            <TranslateMessage txKey={txKeys.services.home.printForEveryone} />
          </Typography>
        </Box>
        <Stack
          direction="row"
          gap={6}
          px={10}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <Stack gap={2}>
            <Box>
              <Typography
                fontWeight="bold"
                component="div"
                variant="h5"
                color="black"
              >
                <TranslateMessage txKey={txKeys.services.home.topQuality} />
              </Typography>
            </Box>
            <Box>
              <Typography component="div" color="grey">
                <TranslateMessage txKey={txKeys.services.home.topQualityDesc} />
              </Typography>
            </Box>
          </Stack>
          <Stack gap={2}>
            <Box>
              <Typography
                fontWeight="bold"
                component="div"
                variant="h5"
                color="black"
              >
                <TranslateMessage txKey={txKeys.services.home.mixMatch} />
              </Typography>
            </Box>
            <Box>
              <Typography component="div" color="grey">
                <TranslateMessage txKey={txKeys.services.home.mixMatchDesc} />
              </Typography>
            </Box>
          </Stack>
          <Stack gap={2}>
            <Box>
              <Typography
                fontWeight="bold"
                component="div"
                variant="h5"
                color="black"
              >
                <TranslateMessage txKey={txKeys.services.home.shipping} />
              </Typography>
            </Box>
            <Box>
              <Typography component="div" color="grey">
                <TranslateMessage txKey={txKeys.services.home.shippingDesc} />
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap={4}>
        <Box sx={{ position: "relative", width: "400px" }}>
          <Image
            alt="models"
            src="/images/man.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <Button
            text={txKeys.services.home.collentions.man}
            sx={{
              position: "absolute",
              backgroundColor: "black",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
        <Box sx={{ position: "relative", width: "400px" }}>
          <Image
            alt="models"
            src="/images/child.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <Button
            text={txKeys.services.home.collentions.child}
            variant="contained"
            sx={{
              position: "absolute",
              backgroundColor: "black",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
        <Box sx={{ position: "relative", width: "400px" }}>
          <Image
            alt="models"
            src="/images/woman.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <Button
            text={txKeys.services.home.collentions.woman}
            variant="contained"
            sx={{
              position: "absolute",
              backgroundColor: "black",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
      </Stack>
      <Stack alignItems="center">
        <Box>
          <Typography
            fontWeight="bold"
            textTransform="uppercase"
            component="div"
            variant="h3"
            sx={{
              background: "linear-gradient(to right, #2EBB77, #B479D9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <TranslateMessage txKey={txKeys.services.home.highQuality} />
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Cards />
      </Stack>
    </Stack>
  );
}
