import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { sort } from "@/common/contants";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";

const SortFilter = () => {
  return (
    <Stack gap={2}>
      <Typography
        component="div"
        variant="h6"
        sx={{
          color: "black",
          "&:hover": { color: "black", cursor: "pointer" },
        }}
      >
        <TranslateMessage txKey={txKeys.services.shop.sort.title} />
      </Typography>
      {sort.map(({ name }) => (
        <Stack key={name}>
          <Box>
            <Typography
              component="div"
              sx={{
                color: "#7E7E7E",
                "&:hover": { color: "black", cursor: "pointer" },
              }}
            >
              <TranslateMessage
                txKey={
                  txKeys.services.shop.sort.list[
                    name as keyof typeof txKeys.services.shop.sort.list
                  ].name
                }
              />
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default SortFilter;
