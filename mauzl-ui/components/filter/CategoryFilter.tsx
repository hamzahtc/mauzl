import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import txKeys from "@/i18n/translations";
import {
  getProductsControllerFindAllQueryKey,
  useCategoriesControllerFindAll,
} from "@/generated/hooks";
import TextTypography from "../common/TextTypography";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import { theme } from "@/styles/stylesheet";

const CategoryFilter = () => {
  const categories = useCategoriesControllerFindAll();
  const [category, setCategory] = useState<number | undefined>(undefined);
  const { setQueryParam, pushQueryParams, getQueryParam } =
    useQueryParamsRouter();

  const categoryParam = Number(getQueryParam("category")) || undefined;

  useEffect(() => {
    setCategory(categoryParam);
  }, [categoryParam]);

  const handleInputChange = (categoryId: number) => {
    setCategory(categoryId);
    setQueryParam("category", categoryId);
    pushQueryParams();
    QueryClientInstance.refetchQueries({
      queryKey: [getProductsControllerFindAllQueryKey],
      exact: true,
    });
  };

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
      {categoryList?.map(({ name, id }) => (
        <Stack
          key={id}
          direction="row"
          justifyContent="space-between"
          onClick={() => handleInputChange(id)}
        >
          <TextTypography
            text={name}
            flex={1}
            sx={{
              color: category === id ? theme.palette.info.main : "#7E7E7E",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <TextTypography
            text="1"
            sx={{
              color: category === id ? theme.palette.info.main : "#7E7E7E",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default CategoryFilter;
