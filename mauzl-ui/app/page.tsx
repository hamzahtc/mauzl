"use client";

import Button from "@/components/common/Button";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "@/components/home/Carousel";
import { EmblaOptionsType } from "embla-carousel";

export default function HomePage() {
  const { push } = useRouter();

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Stack direction="column" gap={4} p={4}>
      {/* <Stack direction="row" gap={6} flexWrap="wrap">
        <Stack gap={4} justifyContent={{ xs: "start", md: "center" }}>
          <Box>
            <Chip
              label={translate(txKeys.services.home.createYourOwn)}
              sx={{
                bgcolor: "white",
                border: `1px solid ${theme.palette.info.main}`,
                color: theme.palette.info.main,
                fontWeight: "bold",
              }}
            />
          </Box>
          <TextTypography
            textTransform="uppercase"
            text={txKeys.services.home.quote}
            variant="h3"
            fontWeight="bold"
          />
          <TextTypography text={txKeys.services.home.description} />
          <Box>
            <PrimaryButton
              onClick={() => push("/shop")}
              text={txKeys.common.shopNow}
              endIcon={<EastIcon />}
            />
          </Box>
        </Stack>
      </Stack> */}
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Carousel slides={SLIDES} options={OPTIONS} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="stretch" // key: stretch children to equal height
        flexWrap="wrap"
        gap={4}
        sx={{ height: 1000 }} // or any fixed height you want
      >
        <Box sx={{ flex: 1, position: "relative" }}>
          <Image
            alt="bags"
            src="/images/bags.jpg"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "5%", // distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              text="VIEW NOW"
              variant="contained"
              onClick={() => push("/shop")}
              sx={{
                color: "black",
                fontWeight: "bold",
                paddingX: 3,
                paddingY: 1.5,
                borderRadius: 0,
                boxShadow: 3,
                backgroundColor: "black",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, position: "relative" }}>
          <Image
            alt="bags"
            src="/images/carpets.jpg"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "5%", // distance from the bottom
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              text="VIEW NOW"
              variant="contained"
              onClick={() => push("/shop")}
              sx={{
                color: "black",
                fontWeight: "bold",
                paddingX: 3,
                paddingY: 1.5,
                borderRadius: 0,
                boxShadow: 3,
                backgroundColor: "black",
              }}
            />
          </Box>
        </Box>
      </Stack>
      {/* <Stack direction="column" alignItems="center" gap={4}>
        <TextTypography
          text={txKeys.services.home.printForEveryone}
          variant="h3"
          fontWeight="bold"
        />
        <Stack
          direction="row"
          gap={6}
          px={10}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <Stack gap={2}>
            <TextTypography
              text={txKeys.services.home.topQuality}
              fontWeight="bold"
              variant="h5"
            />
            <TextTypography
              text={txKeys.services.home.topQualityDesc}
              component="div"
              color="body2"
            />
          </Stack>
          <Stack gap={2}>
            <TextTypography
              text={txKeys.services.home.mixMatch}
              fontWeight="bold"
              variant="h5"
            />
            <TextTypography text={txKeys.services.home.mixMatchDesc} />
          </Stack>
          <Stack gap={2}>
            <TextTypography
              text={txKeys.services.home.shipping}
              fontWeight="bold"
              variant="h5"
            />
            <TextTypography text={txKeys.services.home.shippingDesc} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap={4} justifyContent="center" flexWrap="wrap">
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
        <TextTypography
          text={txKeys.services.home.highQuality}
          fontWeight="bold"
          textTransform="uppercase"
          variant="h3"
          sx={{
            background: "linear-gradient(to right, #f5c06a, #B479D9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </Stack>
      <Stack>
        <Cards />
      </Stack> */}
    </Stack>
  );
}
