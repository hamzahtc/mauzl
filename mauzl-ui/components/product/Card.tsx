import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../common/Button";
import { theme } from "@/styles/stylesheet";

const Card = () => {
  return (
    <Stack gap={2}>
      <Stack alignItems="center" sx={{ position: "relative", width: "300px" }}>
        <Image
          alt="models"
          src="/images/woman.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "200px",
            height: "300px",
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
            left: "30px",
          }}
        >
          <Button
            text="-10%"
            size="small"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          />
          <Button
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
        <Box>
          <Typography fontWeight="bold" component="div" color="black">
            Zone Sweatshirt
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" component="div" color="black">
            $19.95 – $159.95
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Card;
