import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { orders } from "@/common/contants";
import txKeys from "@/i18n/translations";
import TextTypography from "../common/TextTypography";
import { theme } from "@/styles/stylesheet";
import useQueryParamsRouter from "@/hooks/useQueryParamsRouter";
import { QueryClientInstance } from "@/app/ReactQueryClientProvider";
import { getProductsControllerFindAllQueryKey } from "@/generated/hooks";

const SortFilter = () => {
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);

  const { setQueryParam, pushQueryParams, getQueryParam } =
    useQueryParamsRouter();

  const sortByParam = getQueryParam("sortBy") || undefined;

  useEffect(() => {
    setSortBy(sortByParam);
  }, [sortByParam]);

  const handleInputChange = (sortByValue: string) => {
    setSortBy(sortByValue);
    setQueryParam("sortBy", sortByValue);
    pushQueryParams();
    QueryClientInstance.refetchQueries({
      queryKey: getProductsControllerFindAllQueryKey(),
      exact: true,
    });
  };

  return (
    <Stack gap={2}>
      <TextTypography
        text={txKeys.services.shop.sort.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      {orders.map(({ name, value }) => (
        <Stack key={name} onClick={() => handleInputChange(value)}>
          <TextTypography
            text={
              txKeys.services.shop.sort.list[
                name as keyof typeof txKeys.services.shop.sort.list
              ].name
            }
            sx={{
              color: sortBy === value ? theme.palette.info.main : "#7E7E7E",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default SortFilter;
