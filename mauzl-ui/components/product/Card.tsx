import * as React from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import { theme } from "@/styles/stylesheet";
import PrimaryButton from "../common/PrimaryButton";
import TextTypography from "../common/TextTypography";

const Card = () => {
  return (
    <Stack gap={2}>
      <Stack alignItems="center" sx={{ position: "relative" }}>
        <Image
          alt="models"
          src="/images/woman.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "220px",
            height: "330px",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
        <Stack
          gap={1}
          sx={{
            position: "absolute",
            top: "15px",
            left: "-15px",
          }}
        >
          <PrimaryButton
            text="-10%"
            size="small"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          />
          <PrimaryButton
            text="New"
            size="small"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.info.main,
            }}
          />
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <TextTypography text="Zone Sweatshirt" fontWeight="bold" />
        <TextTypography text="19.95 MAD" fontWeight="bold" />
      </Stack>
    </Stack>
  );
};

export default Card;
