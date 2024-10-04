import React from "react";
import { Stack } from "@mui/material";
import txKeys from "@/i18n/translations";
import { useCategoriesControllerFindAll } from "@/generated/hooks";
import TextTypography from "../common/TextTypography";

const CategoryFilter = () => {
  const categories = useCategoriesControllerFindAll();

  if (categories.isLoading) return <></>;

  const categoryList = categories.data?.data;

  return (
    <Stack gap={2}>
      <TextTypography
        text={txKeys.services.shop.categories.title}
        variant="h6"
        sx={{
          color: "black",
          "&:hover": { color: "black", cursor: "pointer" },
        }}
      />
      {categoryList?.map(({ name }) => (
        <Stack key={name} direction="row" justifyContent="space-between">
          <TextTypography
            text={name}
            component="div"
            sx={{
              color: "#7E7E7E",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <TextTypography
            text="1"
            sx={{
              color: "black",
              "&:hover": { cursor: "pointer" },
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default CategoryFilter;
