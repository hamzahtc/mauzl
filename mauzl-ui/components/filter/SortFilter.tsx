import React from "react";
import { Stack } from "@mui/material";
import { sort } from "@/common/contants";
import txKeys from "@/i18n/translations";
import TextTypography from "../common/TextTypography";

const SortFilter = () => {
  return (
    <Stack gap={2}>
      <TextTypography
        text={txKeys.services.shop.sort.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      {sort.map(({ name }) => (
        <Stack key={name}>
          <TextTypography
            text={
              txKeys.services.shop.sort.list[
                name as keyof typeof txKeys.services.shop.sort.list
              ].name
            }
            sx={{
              color: "#7E7E7E",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default SortFilter;
