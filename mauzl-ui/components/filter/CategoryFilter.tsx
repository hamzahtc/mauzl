import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "@/common/contants";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";

const CategoryFilter = () => {
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
        <TranslateMessage txKey={txKeys.services.shop.categories.title} />
      </Typography>
      {categories.map(({ name }) => (
        <Stack key={name} direction="row" justifyContent="space-between">
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
                  txKeys.services.shop.categories.list[
                    name as keyof typeof txKeys.services.shop.categories.list
                  ].name
                }
              />
            </Typography>
          </Box>
          <Box>
            <Typography
              component="div"
              sx={{
                color: "black",
                "&:hover": { cursor: "pointer" },
              }}
            >
              1
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default CategoryFilter;
